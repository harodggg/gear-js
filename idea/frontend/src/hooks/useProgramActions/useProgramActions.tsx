import { useCallback } from 'react';
import { generatePath } from 'react-router-dom';
import { EventRecord } from '@polkadot/types/interfaces';
import { web3FromSource } from '@polkadot/extension-dapp';
import { useApi, useAccount, useAlert, DEFAULT_ERROR_OPTIONS, DEFAULT_SUCCESS_OPTIONS } from '@gear-js/react-hooks';
import { HexString } from '@polkadot/util/types';
import { ProgramMetadata } from '@gear-js/api';

import { useChain, useModal } from 'hooks';
import { uploadLocalProgram } from 'api/LocalDB';
import { Method } from 'entities/explorer';
import { OperationCallbacks } from 'entities/hooks';
import {
  PROGRAM_ERRORS,
  TransactionName,
  TransactionStatus,
  absoluteRoutes,
  UPLOAD_METADATA_TIMEOUT,
} from 'shared/config';
import { checkWallet, getExtrinsicFailedMessage, isNullOrUndefined } from 'shared/helpers';
import { CustomLink } from 'shared/ui/customLink';
import { ProgramStatus } from 'entities/program';
import { addProgramName } from 'api';

import { isHumanTypesRepr } from 'pages/state/helpers';
import { useMetadataUpload } from '../useMetadataUpload';
import { waitForProgramInit } from './helpers';
import { ALERT_OPTIONS } from './consts';
import { Payload, ParamsToCreate, ParamsToUpload, ParamsToSignAndUpload } from './types';

const useProgramActions = () => {
  const alert = useAlert();
  const { api } = useApi();
  const { account } = useAccount();
  const { isDevChain } = useChain();

  const { showModal } = useModal();
  const uploadMetadata = useMetadataUpload();

  const getProgramMessage = (programId: string) => (
    <p>
      ID: <CustomLink to={generatePath(absoluteRoutes.program, { programId })} text={programId} />
    </p>
  );

  const createProgram = (codeId: HexString, payload: Payload) => {
    const { gasLimit, value, initPayload, metadata, payloadType } = payload;

    const program = { value, codeId, gasLimit, initPayload };

    const result = api.program.create(program, metadata, payloadType);

    return result.programId;
  };

  const uploadProgram = async (optBuffer: Buffer, payload: Payload) => {
    const { gasLimit, value, initPayload, metadata, payloadType } = payload;

    const program = { code: optBuffer, value, gasLimit, initPayload };

    const result = api.program.upload(program, metadata, payloadType);

    return result;
  };

  const handleEventsStatus = (events: EventRecord[], { reject }: OperationCallbacks) => {
    events.forEach(({ event }) => {
      const { method, section } = event;
      const alertOptions = { title: `${section}.${method}` };

      if (method === Method.ExtrinsicFailed) {
        alert.error(getExtrinsicFailedMessage(api, event), alertOptions);

        if (reject) reject();
      }
    });
  };

  const signAndUpload = async ({
    name,
    signer,
    payload,
    programId,
    codeId,
    reject,
    resolve,
    method,
  }: ParamsToSignAndUpload) => {
    const { metaHex } = payload;
    const alertId = alert.loading('SignIn', { title: method });
    const programMessage = getProgramMessage(programId);

    try {
      const initialization = waitForProgramInit(api, programId);

      await api.program.signAndSend(account!.address, { signer }, ({ status, events }) => {
        if (status.isReady) {
          alert.update(alertId, TransactionStatus.Ready);
        } else if (status.isInBlock) {
          alert.update(alertId, TransactionStatus.InBlock);
        } else if (status.isFinalized) {
          alert.update(alertId, TransactionStatus.Finalized, DEFAULT_SUCCESS_OPTIONS);
          handleEventsStatus(events, { reject, resolve });

          // timeout cuz wanna be sure that block data is ready
          setTimeout(() => {
            addProgramName({ id: programId, name: name || programId }, isDevChain).then(
              () =>
                metaHex &&
                uploadMetadata({
                  codeHash: codeId,
                  metaHex,
                  programId,
                  resolve: () => alert.success(programMessage, ALERT_OPTIONS),
                }),
            );
          }, UPLOAD_METADATA_TIMEOUT);
        } else if (status.isInvalid) {
          alert.update(alertId, PROGRAM_ERRORS.INVALID_TRANSACTION, DEFAULT_ERROR_OPTIONS);

          if (reject) reject();
        }
      });

      const initStatus = await initialization;

      if (initStatus === ProgramStatus.Terminated || initStatus === ProgramStatus.Exited) {
        alert.error(programMessage, ALERT_OPTIONS);

        if (reject) reject();

        return;
      }

      if (resolve) resolve();

      if (isDevChain) {
        const metahash = await api.program.metaHash(programId);
        const meta = metaHex ? ProgramMetadata.from(metaHex) : undefined;

        const hasState =
          !!meta &&
          (typeof meta.types.state === 'number' ||
            (isHumanTypesRepr(meta.types.state) && !isNullOrUndefined(meta.types.state.output)));

        await uploadLocalProgram({
          id: programId,
          name: name || programId,
          owner: account?.decodedAddress!,
          code: { id: codeId },
          hasState,
          metahash,
        });
      }
    } catch (error) {
      const message = (error as Error).message;

      alert.update(alertId, message, DEFAULT_ERROR_OPTIONS);

      if (reject) reject();
    }
  };

  const create = useCallback(
    async ({ codeId, payload, reject, resolve }: ParamsToCreate) => {
      try {
        checkWallet(account);

        const { meta, address } = account!;

        const [{ signer }, programId] = await Promise.all([
          web3FromSource(meta.source),
          createProgram(codeId, payload),
        ]);

        const { partialFee } = await api.program.paymentInfo(address, { signer });

        const handleConfirm = () =>
          signAndUpload({
            name: payload.programName,
            method: TransactionName.CreateProgram,
            signer,
            payload,
            programId,
            codeId,
            reject,
            resolve,
          });

        showModal('transaction', {
          fee: partialFee.toHuman(),
          name: TransactionName.CreateProgram,
          addressFrom: address,
          onAbort: reject,
          onConfirm: handleConfirm,
        });
      } catch (error) {
        const message = (error as Error).message;

        alert.error(message);
        if (reject) reject();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [api, account, uploadMetadata],
  );

  const upload = useCallback(
    async ({ optBuffer, payload, name, reject, resolve }: ParamsToUpload) => {
      try {
        checkWallet(account);

        const { meta, address } = account!;

        const [{ signer }, { programId, codeId }] = await Promise.all([
          web3FromSource(meta.source),
          uploadProgram(optBuffer, payload),
        ]);

        const { partialFee } = await api.program.paymentInfo(address, { signer });

        const handleConfirm = () =>
          signAndUpload({
            name,
            method: TransactionName.UploadProgram,
            signer,
            payload,
            programId,
            codeId,
            reject,
            resolve,
          });

        showModal('transaction', {
          fee: partialFee.toHuman(),
          name: TransactionName.UploadProgram,
          addressFrom: address,
          onAbort: reject,
          onConfirm: handleConfirm,
        });
      } catch (error) {
        const message = (error as Error).message;

        alert.error(message);
        if (reject) reject();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [api, account, uploadMetadata],
  );

  return { uploadProgram: upload, createProgram: create };
};

export { useProgramActions };
