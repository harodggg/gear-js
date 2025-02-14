import { logger, JSONRPC_ERRORS, RMQExchange, RMQQueue } from '@gear-js/common';
import { EventEmitter } from 'node:events';

import { transferService } from '../transfer.service';
import { gearService } from '../gear';
import { producer } from '../rabbitmq/producer';

interface TBRequestParams {
  payload: { address: string; genesis: string };
  correlationId: string;
}

export const requests: Array<TBRequestParams> = [];

const pushEmitter = new EventEmitter();

Object.defineProperty(requests, 'push', {
  value: function (v: any) {
    this[this.length] = v;
    pushEmitter.emit('push');
  },
});

async function* transferGenerator() {
  while (true) {
    if (requests.length === 0) {
      await new Promise((resolve) => {
        pushEmitter.once('push', resolve);
      });
    }
    const req = requests.shift();
    if (req) {
      yield req;
    }
  }
}

export async function transferProcess(): Promise<void> {
  for await (const {
    payload: { address, genesis },
    correlationId,
  } of transferGenerator()) {
    let result;

    try {
      const isPossibleToTransfer = await transferService.isPossibleToTransfer(address, genesis);
      if (isPossibleToTransfer) {
        const transferBalance = await gearService.transferBalance(address);
        result = { result: transferBalance };
      } else {
        result = { error: JSONRPC_ERRORS.TransferLimitReached.name };
      }
    } catch (error) {
      logger.error(error.message, { stack: error.stack });
      result = { error: JSONRPC_ERRORS.InternalError.name };
    }
    producer.sendMessage(RMQExchange.DIRECT_EX, RMQQueue.REPLIES, correlationId, result);
  }
}
