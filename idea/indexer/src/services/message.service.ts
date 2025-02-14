import { DataSource, Repository } from 'typeorm';
import {
  AllMessagesResult,
  FindMessageParams,
  GetMessagesParams,
  MessageReadReason,
  logger,
  ProgramStatus,
} from '@gear-js/common';

import { Message } from '../database';
import { ProgramService } from './program.service';
import {
  MessagesDispatchedDataInput,
  MessageEntryPoint,
  MessageNotFound,
  constructQueryBuilder,
  PAGINATION_LIMIT,
} from '../common';

export class MessageService {
  private repo: Repository<Message>;

  constructor(dataSource: DataSource, private programService: ProgramService) {
    this.repo = dataSource.getRepository(Message);
  }

  public async get({ id, genesis }: FindMessageParams): Promise<Message> {
    const message = await this.repo.findOne({ where: { id, genesis }, relations: ['program'] });
    if (!message) {
      throw new MessageNotFound();
    }
    return message;
  }

  public async getMany({
    genesis,
    source,
    query,
    destination,
    limit,
    offset,
    toDate,
    fromDate,
    mailbox,
  }: GetMessagesParams): Promise<AllMessagesResult> {
    const builder = constructQueryBuilder(
      this.repo,
      genesis,
      {
        source,
        destination,
        readReason: mailbox ? null : undefined,
        expiration: mailbox ? { operator: '>', value: 0 } : undefined,
      },
      { fields: ['id', 'source', 'destination'], value: query },
      { fromDate, toDate },
      offset || 0,
      limit || PAGINATION_LIMIT,
      ['program'],
      [
        { column: 'timestamp', sort: 'DESC' },
        { column: 'type', sort: 'ASC' },
      ],
    );
    const [messages, count] = await builder.getManyAndCount();
    return {
      messages,
      count,
    };
  }

  public save(messages: Message[]): Promise<Message[]> {
    return this.repo.save(messages);
  }

  public async setDispatchedStatus({ statuses, genesis }: MessagesDispatchedDataInput): Promise<void> {
    for (const id of Object.keys(statuses)) {
      try {
        await this.repo.update({ id, genesis }, { processedWithPanic: statuses[id] === 'Success' ? false : true });
      } catch (error) {
        logger.error(error.message, { error });
      }

      if (statuses[id] === 'Failed') {
        const message = await this.get({ id, genesis });
        if (message.entry === MessageEntryPoint.INIT) {
          await this.programService.setStatus(message.destination, genesis, ProgramStatus.TERMINATED);
        }
      }
    }
  }

  public async updateReadStatus(id: string, readReason: MessageReadReason): Promise<void> {
    try {
      await this.repo.update({ id }, { readReason });
    } catch (error) {
      logger.error(error.message, { error });
    }
  }

  public async deleteRecords(genesis: string): Promise<void> {
    await this.repo.delete({ genesis });
  }
}
