// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type {
  BitVec,
  Bool,
  Bytes,
  Compact,
  Data,
  I128,
  I16,
  I256,
  I32,
  I64,
  I8,
  Json,
  Null,
  Option,
  Raw,
  StorageKey,
  Text,
  Type,
  U128,
  U16,
  U256,
  U32,
  U64,
  U8,
  USize,
  Vec,
  bool,
  i128,
  i16,
  i256,
  i32,
  i64,
  i8,
  u128,
  u16,
  u256,
  u32,
  u64,
  u8,
  usize,
} from '@polkadot/types';
import type {
  AssetApproval,
  AssetApprovalKey,
  AssetBalance,
  AssetDestroyWitness,
  AssetDetails,
  AssetMetadata,
  TAssetBalance,
  TAssetDepositBalance,
} from '@polkadot/types/interfaces/assets';
import type {
  BlockAttestations,
  IncludedBlocks,
  MoreAttestations,
} from '@polkadot/types/interfaces/attestations';
import type { RawAuraPreDigest } from '@polkadot/types/interfaces/aura';
import type {
  ExtrinsicOrHash,
  ExtrinsicStatus,
} from '@polkadot/types/interfaces/author';
import type { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import type {
  AllowedSlots,
  BabeAuthorityWeight,
  BabeBlockWeight,
  BabeEpochConfiguration,
  BabeEquivocationProof,
  BabeWeight,
  EpochAuthorship,
  MaybeRandomness,
  MaybeVrf,
  NextConfigDescriptor,
  NextConfigDescriptorV1,
  Randomness,
  RawBabePreDigest,
  RawBabePreDigestCompat,
  RawBabePreDigestPrimary,
  RawBabePreDigestPrimaryTo159,
  RawBabePreDigestSecondaryPlain,
  RawBabePreDigestSecondaryTo159,
  RawBabePreDigestSecondaryVRF,
  RawBabePreDigestTo159,
  SlotNumber,
  VrfData,
  VrfOutput,
  VrfProof,
} from '@polkadot/types/interfaces/babe';
import type {
  AccountData,
  BalanceLock,
  BalanceLockTo212,
  BalanceStatus,
  Reasons,
  ReserveData,
  ReserveIdentifier,
  VestingSchedule,
  WithdrawReasons,
} from '@polkadot/types/interfaces/balances';
import type {
  BeefyCommitment,
  BeefyId,
  BeefyNextAuthoritySet,
  BeefyPayload,
  BeefySignedCommitment,
  MmrRootHash,
  ValidatorSetId,
} from '@polkadot/types/interfaces/beefy';
import type {
  BridgedBlockHash,
  BridgedBlockNumber,
  BridgedHeader,
  InitializationData,
} from '@polkadot/types/interfaces/bridges';
import type { BlockHash } from '@polkadot/types/interfaces/chain';
import type { PrefixedStorageKey } from '@polkadot/types/interfaces/childstate';
import type {
  EthereumAddress,
  StatementKind,
} from '@polkadot/types/interfaces/claims';
import type {
  CollectiveOrigin,
  MemberCount,
  ProposalIndex,
  Votes,
  VotesTo230,
} from '@polkadot/types/interfaces/collective';
import type {
  AuthorityId,
  RawVRFOutput,
} from '@polkadot/types/interfaces/consensus';
import type {
  AliveContractInfo,
  CodeHash,
  ContractCallRequest,
  ContractExecResult,
  ContractExecResultErr,
  ContractExecResultErrModule,
  ContractExecResultOk,
  ContractExecResultResult,
  ContractExecResultSuccessTo255,
  ContractExecResultSuccessTo260,
  ContractExecResultTo255,
  ContractExecResultTo260,
  ContractInfo,
  ContractInstantiateResult,
  ContractStorageKey,
  DeletedContract,
  ExecReturnValue,
  Gas,
  HostFnWeights,
  HostFnWeightsTo264,
  InstantiateRequest,
  InstantiateReturnValue,
  InstructionWeights,
  Limits,
  LimitsTo264,
  PrefabWasmModule,
  RentProjection,
  Schedule,
  ScheduleTo212,
  ScheduleTo258,
  ScheduleTo264,
  SeedOf,
  TombstoneContractInfo,
  TrieId,
} from '@polkadot/types/interfaces/contracts';
import type {
  ContractConstructorSpec,
  ContractContractSpec,
  ContractCryptoHasher,
  ContractDiscriminant,
  ContractDisplayName,
  ContractEventParamSpec,
  ContractEventSpec,
  ContractLayoutArray,
  ContractLayoutCell,
  ContractLayoutEnum,
  ContractLayoutHash,
  ContractLayoutHashingStrategy,
  ContractLayoutKey,
  ContractLayoutStruct,
  ContractLayoutStructField,
  ContractMessageParamSpec,
  ContractMessageSpec,
  ContractProject,
  ContractProjectContract,
  ContractProjectSource,
  ContractSelector,
  ContractStorageLayout,
  ContractTypeSpec,
} from '@polkadot/types/interfaces/contractsAbi';
import type {
  FundIndex,
  FundInfo,
  LastContribution,
  TrieIndex,
} from '@polkadot/types/interfaces/crowdloan';
import type {
  ConfigData,
  MessageId,
  OverweightIndex,
  PageCounter,
  PageIndexData,
} from '@polkadot/types/interfaces/cumulus';
import type {
  AccountVote,
  AccountVoteSplit,
  AccountVoteStandard,
  Conviction,
  Delegations,
  PreimageStatus,
  PreimageStatusAvailable,
  PriorLock,
  PropIndex,
  Proposal,
  ProxyState,
  ReferendumIndex,
  ReferendumInfo,
  ReferendumInfoFinished,
  ReferendumInfoTo239,
  ReferendumStatus,
  Tally,
  Voting,
  VotingDelegating,
  VotingDirect,
  VotingDirectVote,
} from '@polkadot/types/interfaces/democracy';
import type {
  ApprovalFlag,
  DefunctVoter,
  Renouncing,
  SetIndex,
  Vote,
  VoteIndex,
  VoteThreshold,
  VoterInfo,
} from '@polkadot/types/interfaces/elections';
import type {
  CreatedBlock,
  ImportedAux,
} from '@polkadot/types/interfaces/engine';
import type {
  EthAccount,
  EthBlock,
  EthBloom,
  EthCallRequest,
  EthFilter,
  EthFilterAddress,
  EthFilterChanges,
  EthFilterTopic,
  EthFilterTopicEntry,
  EthFilterTopicInner,
  EthHeader,
  EthLog,
  EthReceipt,
  EthRichBlock,
  EthRichHeader,
  EthStorageProof,
  EthSubKind,
  EthSubParams,
  EthSubResult,
  EthSyncInfo,
  EthSyncStatus,
  EthTransaction,
  EthTransactionAction,
  EthTransactionCondition,
  EthTransactionRequest,
  EthTransactionSignature,
  EthTransactionStatus,
  EthWork,
  EthereumAccountId,
  EthereumLookupSource,
  EthereumSignature,
} from '@polkadot/types/interfaces/eth';
import type {
  EvmAccount,
  EvmLog,
  EvmVicinity,
  ExitError,
  ExitFatal,
  ExitReason,
  ExitRevert,
  ExitSucceed,
} from '@polkadot/types/interfaces/evm';
import type {
  AnySignature,
  EcdsaSignature,
  Ed25519Signature,
  Extrinsic,
  ExtrinsicEra,
  ExtrinsicPayload,
  ExtrinsicPayloadUnknown,
  ExtrinsicPayloadV4,
  ExtrinsicSignature,
  ExtrinsicSignatureV4,
  ExtrinsicUnknown,
  ExtrinsicV4,
  ImmortalEra,
  MortalEra,
  MultiSignature,
  Signature,
  SignerPayload,
  Sr25519Signature,
} from '@polkadot/types/interfaces/extrinsics';
import type {
  AssetOptions,
  Owner,
  PermissionLatest,
  PermissionVersions,
  PermissionsV1,
} from '@polkadot/types/interfaces/genericAsset';
import type {
  ActiveGilt,
  ActiveGiltsTotal,
  ActiveIndex,
  GiltBid,
} from '@polkadot/types/interfaces/gilt';
import type {
  AuthorityIndex,
  AuthorityList,
  AuthoritySet,
  AuthoritySetChange,
  AuthoritySetChanges,
  AuthorityWeight,
  DelayKind,
  DelayKindBest,
  EncodedFinalityProofs,
  ForkTreePendingChange,
  ForkTreePendingChangeNode,
  GrandpaCommit,
  GrandpaEquivocation,
  GrandpaEquivocationProof,
  GrandpaEquivocationValue,
  GrandpaJustification,
  GrandpaPrecommit,
  GrandpaPrevote,
  GrandpaSignedPrecommit,
  JustificationNotification,
  KeyOwnerProof,
  NextAuthority,
  PendingChange,
  PendingPause,
  PendingResume,
  Precommits,
  Prevotes,
  ReportedRoundStates,
  RoundState,
  SetId,
  StoredPendingChange,
  StoredState,
} from '@polkadot/types/interfaces/grandpa';
import type {
  IdentityFields,
  IdentityInfo,
  IdentityInfoAdditional,
  IdentityJudgement,
  RegistrarIndex,
  RegistrarInfo,
  Registration,
  RegistrationJudgement,
} from '@polkadot/types/interfaces/identity';
import type {
  AuthIndex,
  AuthoritySignature,
  Heartbeat,
  HeartbeatTo244,
  OpaqueMultiaddr,
  OpaqueNetworkState,
  OpaquePeerId,
} from '@polkadot/types/interfaces/imOnline';
import type {
  CallIndex,
  LotteryConfig,
} from '@polkadot/types/interfaces/lottery';
import type {
  ErrorMetadataLatest,
  ErrorMetadataV10,
  ErrorMetadataV11,
  ErrorMetadataV12,
  ErrorMetadataV13,
  ErrorMetadataV9,
  EventMetadataLatest,
  EventMetadataV10,
  EventMetadataV11,
  EventMetadataV12,
  EventMetadataV13,
  EventMetadataV9,
  ExtrinsicMetadataLatest,
  ExtrinsicMetadataV11,
  ExtrinsicMetadataV12,
  ExtrinsicMetadataV13,
  FunctionArgumentMetadataLatest,
  FunctionArgumentMetadataV10,
  FunctionArgumentMetadataV11,
  FunctionArgumentMetadataV12,
  FunctionArgumentMetadataV13,
  FunctionArgumentMetadataV9,
  FunctionMetadataLatest,
  FunctionMetadataV10,
  FunctionMetadataV11,
  FunctionMetadataV12,
  FunctionMetadataV13,
  FunctionMetadataV9,
  MetadataAll,
  MetadataLatest,
  MetadataV10,
  MetadataV11,
  MetadataV12,
  MetadataV13,
  MetadataV9,
  ModuleConstantMetadataLatest,
  ModuleConstantMetadataV10,
  ModuleConstantMetadataV11,
  ModuleConstantMetadataV12,
  ModuleConstantMetadataV13,
  ModuleConstantMetadataV9,
  ModuleMetadataLatest,
  ModuleMetadataV10,
  ModuleMetadataV11,
  ModuleMetadataV12,
  ModuleMetadataV13,
  ModuleMetadataV9,
  StorageEntryMetadataLatest,
  StorageEntryMetadataV10,
  StorageEntryMetadataV11,
  StorageEntryMetadataV12,
  StorageEntryMetadataV13,
  StorageEntryMetadataV9,
  StorageEntryModifierLatest,
  StorageEntryModifierV10,
  StorageEntryModifierV11,
  StorageEntryModifierV12,
  StorageEntryModifierV13,
  StorageEntryModifierV9,
  StorageEntryTypeLatest,
  StorageEntryTypeV10,
  StorageEntryTypeV11,
  StorageEntryTypeV12,
  StorageEntryTypeV13,
  StorageEntryTypeV9,
  StorageHasher,
  StorageHasherV10,
  StorageHasherV11,
  StorageHasherV12,
  StorageHasherV13,
  StorageHasherV9,
  StorageMetadataLatest,
  StorageMetadataV10,
  StorageMetadataV11,
  StorageMetadataV12,
  StorageMetadataV13,
  StorageMetadataV9,
} from '@polkadot/types/interfaces/metadata';
import type { MmrLeafProof } from '@polkadot/types/interfaces/mmr';
import type { StorageKind } from '@polkadot/types/interfaces/offchain';
import type {
  DeferredOffenceOf,
  Kind,
  OffenceDetails,
  Offender,
  OpaqueTimeSlot,
  ReportIdOf,
  Reporter,
} from '@polkadot/types/interfaces/offences';
import type {
  AbridgedCandidateReceipt,
  AbridgedHostConfiguration,
  AbridgedHrmpChannel,
  AssignmentId,
  AssignmentKind,
  AttestedCandidate,
  AuctionIndex,
  AuthorityDiscoveryId,
  AvailabilityBitfield,
  AvailabilityBitfieldRecord,
  BackedCandidate,
  Bidder,
  BufferedSessionChange,
  CandidateCommitments,
  CandidateDescriptor,
  CandidateHash,
  CandidateInfo,
  CandidatePendingAvailability,
  CandidateReceipt,
  CollatorId,
  CollatorSignature,
  CommittedCandidateReceipt,
  CoreAssignment,
  CoreIndex,
  CoreOccupied,
  DisputeStatement,
  DisputeStatementSet,
  DoubleVoteReport,
  DownwardMessage,
  ExplicitDisputeStatement,
  GlobalValidationData,
  GlobalValidationSchedule,
  GroupIndex,
  HeadData,
  HostConfiguration,
  HrmpChannel,
  HrmpChannelId,
  HrmpOpenChannelRequest,
  InboundDownwardMessage,
  InboundHrmpMessage,
  InboundHrmpMessages,
  IncomingParachain,
  IncomingParachainDeploy,
  IncomingParachainFixed,
  InvalidDisputeStatementKind,
  LeasePeriod,
  LeasePeriodOf,
  LocalValidationData,
  MessageIngestionType,
  MessageQueueChain,
  MessagingStateSnapshot,
  MessagingStateSnapshotEgressEntry,
  MultiDisputeStatementSet,
  NewBidder,
  OutboundHrmpMessage,
  ParaGenesisArgs,
  ParaId,
  ParaInfo,
  ParaLifecycle,
  ParaPastCodeMeta,
  ParaScheduling,
  ParaValidatorIndex,
  ParachainDispatchOrigin,
  ParachainInherentData,
  ParachainProposal,
  ParachainsInherentData,
  ParathreadClaim,
  ParathreadClaimQueue,
  ParathreadEntry,
  PersistedValidationData,
  QueuedParathread,
  RegisteredParachainInfo,
  RelayBlockNumber,
  RelayChainBlockNumber,
  RelayChainHash,
  RelayHash,
  Remark,
  Retriable,
  Scheduling,
  ServiceQuality,
  SessionInfo,
  SessionInfoValidatorGroup,
  SignedAvailabilityBitfield,
  SignedAvailabilityBitfields,
  SigningContext,
  SlotRange,
  Statement,
  SubId,
  SystemInherentData,
  TransientValidationData,
  UpwardMessage,
  ValidDisputeStatementKind,
  ValidationCode,
  ValidationCodeHash,
  ValidationData,
  ValidationDataType,
  ValidationFunctionParams,
  ValidatorSignature,
  ValidityAttestation,
  VecInboundHrmpMessage,
  WinnersData,
  WinnersDataTuple,
  WinningData,
  WinningDataEntry,
} from '@polkadot/types/interfaces/parachains';
import type {
  FeeDetails,
  InclusionFee,
  RuntimeDispatchInfo,
} from '@polkadot/types/interfaces/payment';
import type { Approvals } from '@polkadot/types/interfaces/poll';
import type {
  ProxyAnnouncement,
  ProxyDefinition,
  ProxyType,
} from '@polkadot/types/interfaces/proxy';
import type {
  AccountStatus,
  AccountValidity,
} from '@polkadot/types/interfaces/purchase';
import type {
  ActiveRecovery,
  RecoveryConfig,
} from '@polkadot/types/interfaces/recovery';
import type { RpcMethods } from '@polkadot/types/interfaces/rpc';
import type {
  AccountId,
  AccountIdOf,
  AccountIndex,
  Address,
  AssetId,
  Balance,
  BalanceOf,
  Block,
  BlockNumber,
  Call,
  CallHash,
  CallHashOf,
  ChangesTrieConfiguration,
  ChangesTrieSignal,
  CodecHash,
  Consensus,
  ConsensusEngineId,
  Digest,
  DigestItem,
  EncodedJustification,
  ExtrinsicsWeight,
  Fixed128,
  Fixed64,
  FixedI128,
  FixedI64,
  FixedU128,
  FixedU64,
  H1024,
  H128,
  H160,
  H2048,
  H256,
  H32,
  H512,
  H64,
  Hash,
  Header,
  HeaderPartial,
  I32F32,
  Index,
  IndicesLookupSource,
  Justification,
  Justifications,
  KeyTypeId,
  KeyValue,
  LockIdentifier,
  LookupSource,
  LookupTarget,
  ModuleId,
  Moment,
  MultiAddress,
  MultiSigner,
  OpaqueCall,
  Origin,
  OriginCaller,
  PalletId,
  PalletVersion,
  PalletsOrigin,
  Pays,
  PerU16,
  Perbill,
  Percent,
  Permill,
  Perquintill,
  Phantom,
  PhantomData,
  PreRuntime,
  Releases,
  RuntimeDbWeight,
  Seal,
  SealV0,
  SignedBlock,
  SignedBlockWithJustification,
  SignedBlockWithJustifications,
  Slot,
  StorageData,
  StorageProof,
  TransactionInfo,
  TransactionPriority,
  TransactionStorageProof,
  U32F32,
  ValidatorId,
  ValidatorIdOf,
  Weight,
  WeightMultiplier,
} from '@polkadot/types/interfaces/runtime';
import type {
  SiField,
  SiLookupTypeId,
  SiPath,
  SiType,
  SiTypeDef,
  SiTypeDefArray,
  SiTypeDefComposite,
  SiTypeDefPrimitive,
  SiTypeDefSequence,
  SiTypeDefTuple,
  SiTypeDefVariant,
  SiVariant,
} from '@polkadot/types/interfaces/scaleInfo';
import type {
  Period,
  Priority,
  SchedulePeriod,
  SchedulePriority,
  Scheduled,
  ScheduledTo254,
  TaskAddress,
} from '@polkadot/types/interfaces/scheduler';
import type {
  BeefyKey,
  FullIdentification,
  IdentificationTuple,
  Keys,
  MembershipProof,
  SessionIndex,
  SessionKeys1,
  SessionKeys10,
  SessionKeys10B,
  SessionKeys2,
  SessionKeys3,
  SessionKeys4,
  SessionKeys5,
  SessionKeys6,
  SessionKeys6B,
  SessionKeys7,
  SessionKeys7B,
  SessionKeys8,
  SessionKeys8B,
  SessionKeys9,
  SessionKeys9B,
  ValidatorCount,
} from '@polkadot/types/interfaces/session';
import type {
  Bid,
  BidKind,
  SocietyJudgement,
  SocietyVote,
  StrikeCount,
  VouchingStatus,
} from '@polkadot/types/interfaces/society';
import type {
  ActiveEraInfo,
  CompactAssignments,
  CompactAssignmentsTo257,
  CompactAssignmentsTo265,
  CompactAssignmentsWith16,
  CompactAssignmentsWith24,
  CompactScore,
  CompactScoreCompact,
  ElectionCompute,
  ElectionPhase,
  ElectionResult,
  ElectionScore,
  ElectionSize,
  ElectionStatus,
  EraIndex,
  EraPoints,
  EraRewardPoints,
  EraRewards,
  Exposure,
  ExtendedBalance,
  Forcing,
  IndividualExposure,
  KeyType,
  MomentOf,
  Nominations,
  NominatorIndex,
  NominatorIndexCompact,
  OffchainAccuracy,
  OffchainAccuracyCompact,
  PhragmenScore,
  Points,
  RawSolution,
  RawSolutionTo265,
  RawSolutionWith16,
  RawSolutionWith24,
  ReadySolution,
  RewardDestination,
  RewardPoint,
  RoundSnapshot,
  SeatHolder,
  SignedSubmission,
  SignedSubmissionOf,
  SlashJournalEntry,
  SlashingSpans,
  SlashingSpansTo204,
  SolutionOrSnapshotSize,
  SolutionSupport,
  SolutionSupports,
  SpanIndex,
  SpanRecord,
  StakingLedger,
  StakingLedgerTo223,
  StakingLedgerTo240,
  SubmissionIndicesOf,
  UnappliedSlash,
  UnappliedSlashOther,
  UnlockChunk,
  ValidatorIndex,
  ValidatorIndexCompact,
  ValidatorPrefs,
  ValidatorPrefsTo145,
  ValidatorPrefsTo196,
  ValidatorPrefsWithBlocked,
  ValidatorPrefsWithCommission,
  VoteWeight,
  Voter,
} from '@polkadot/types/interfaces/staking';
import type {
  ApiId,
  BlockTrace,
  BlockTraceEvent,
  BlockTraceEventData,
  BlockTraceSpan,
  KeyValueOption,
  ReadProof,
  RuntimeVersion,
  RuntimeVersionApi,
  RuntimeVersionPartial,
  StorageChangeSet,
  TraceBlockResponse,
  TraceError,
} from '@polkadot/types/interfaces/state';
import type { WeightToFeeCoefficient } from '@polkadot/types/interfaces/support';
import type {
  AccountInfo,
  AccountInfoWithDualRefCount,
  AccountInfoWithProviders,
  AccountInfoWithRefCount,
  AccountInfoWithRefCountU8,
  AccountInfoWithTripleRefCount,
  ApplyExtrinsicResult,
  ArithmeticError,
  BlockLength,
  BlockWeights,
  ChainProperties,
  ChainType,
  ConsumedWeight,
  DigestOf,
  DispatchClass,
  DispatchError,
  DispatchErrorModule,
  DispatchErrorTo198,
  DispatchInfo,
  DispatchInfoTo190,
  DispatchInfoTo244,
  DispatchOutcome,
  DispatchResult,
  DispatchResultOf,
  DispatchResultTo198,
  Event,
  EventId,
  EventIndex,
  EventRecord,
  Health,
  InvalidTransaction,
  Key,
  LastRuntimeUpgradeInfo,
  NetworkState,
  NetworkStatePeerset,
  NetworkStatePeersetInfo,
  NodeRole,
  NotConnectedPeer,
  Peer,
  PeerEndpoint,
  PeerEndpointAddr,
  PeerInfo,
  PeerPing,
  PerDispatchClassU32,
  PerDispatchClassWeight,
  PerDispatchClassWeightsPerClass,
  Phase,
  RawOrigin,
  RefCount,
  RefCountTo259,
  SyncState,
  SystemOrigin,
  TokenError,
  TransactionValidityError,
  UnknownTransaction,
  WeightPerClass,
} from '@polkadot/types/interfaces/system';
import type {
  Bounty,
  BountyIndex,
  BountyStatus,
  BountyStatusActive,
  BountyStatusCuratorProposed,
  BountyStatusPendingPayout,
  OpenTip,
  OpenTipFinderTo225,
  OpenTipTip,
  OpenTipTo225,
  TreasuryProposal,
} from '@polkadot/types/interfaces/treasury';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type {
  ClassDetails,
  ClassId,
  ClassMetadata,
  DepositBalance,
  DepositBalanceOf,
  DestroyWitness,
  InstanceDetails,
  InstanceId,
  InstanceMetadata,
} from '@polkadot/types/interfaces/uniques';
import type { Multisig, Timepoint } from '@polkadot/types/interfaces/utility';
import type { VestingInfo } from '@polkadot/types/interfaces/vesting';
import type {
  AccountId32Junction,
  AccountIndex64Junction,
  AccountKey20Junction,
  AssetInstance,
  BodyId,
  BodyPart,
  BodyPartAtLeastProportion,
  BodyPartFraction,
  BodyPartMoreThanProportion,
  DoubleEncodedCall,
  InboundStatus,
  Junction,
  MultiAsset,
  MultiAssetAbstractFungible,
  MultiAssetAbstractNonFungible,
  MultiAssetConcreteFungible,
  MultiAssetConcreteNonFungible,
  MultiLocation,
  NetworkId,
  OutboundStatus,
  Outcome,
  PluralityJunction,
  QueueConfigData,
  VersionedMultiAsset,
  VersionedMultiLocation,
  VersionedXcm,
  Xcm,
  XcmAssetEffects,
  XcmError,
  XcmHrmpChannelAccepted,
  XcmHrmpChannelClosing,
  XcmHrmpNewChannelOpenRequest,
  XcmOrder,
  XcmOrderBuyExecution,
  XcmOrderDepositAsset,
  XcmOrderDepositReserveAsset,
  XcmOrderExchangeAsset,
  XcmOrderInitiateReserveWithdraw,
  XcmOrderInitiateTeleport,
  XcmOrderQueryHolding,
  XcmOrigin,
  XcmOriginKind,
  XcmQueryResponse,
  XcmRelayedFrom,
  XcmReserveAssetDeposit,
  XcmResponse,
  XcmTeleportAsset,
  XcmTransact,
  XcmTransferAsset,
  XcmTransferReserveAsset,
  XcmWithdrawAsset,
  XcmpMessageFormat,
} from '@polkadot/types/interfaces/xcm';
import type {
  Message,
  MessageError,
  Node,
} from 'src/interfaces/default';

declare module '@polkadot/types/types/registry' {
  export interface InterfaceTypes {
    'Compact<AccountIndex>': Compact<AccountIndex>;
    'Compact<ActiveIndex>': Compact<ActiveIndex>;
    'Compact<ApprovalFlag>': Compact<ApprovalFlag>;
    'Compact<AssetId>': Compact<AssetId>;
    'Compact<AuctionIndex>': Compact<AuctionIndex>;
    'Compact<AuthIndex>': Compact<AuthIndex>;
    'Compact<AuthorityIndex>': Compact<AuthorityIndex>;
    'Compact<AuthorityWeight>': Compact<AuthorityWeight>;
    'Compact<BabeAuthorityWeight>': Compact<BabeAuthorityWeight>;
    'Compact<BabeBlockWeight>': Compact<BabeBlockWeight>;
    'Compact<BabeWeight>': Compact<BabeWeight>;
    'Compact<Balance>': Compact<Balance>;
    'Compact<BalanceOf>': Compact<BalanceOf>;
    'Compact<BlockNumber>': Compact<BlockNumber>;
    'Compact<BlockNumberFor>': Compact<undefined>;
    'Compact<BlockNumberOf>': Compact<undefined>;
    'Compact<BountyIndex>': Compact<BountyIndex>;
    'Compact<BridgedBlockNumber>': Compact<BridgedBlockNumber>;
    'Compact<ClassId>': Compact<ClassId>;
    'Compact<ContractDiscriminant>': Compact<ContractDiscriminant>;
    'Compact<CoreIndex>': Compact<CoreIndex>;
    'Compact<DepositBalance>': Compact<DepositBalance>;
    'Compact<DepositBalanceOf>': Compact<DepositBalanceOf>;
    'Compact<EraIndex>': Compact<EraIndex>;
    'Compact<EventIndex>': Compact<EventIndex>;
    'Compact<ExtendedBalance>': Compact<ExtendedBalance>;
    'Compact<FixedU128>': Compact<FixedU128>;
    'Compact<FixedU64>': Compact<FixedU64>;
    'Compact<FundIndex>': Compact<FundIndex>;
    'Compact<Gas>': Compact<Gas>;
    'Compact<GroupIndex>': Compact<GroupIndex>;
    'Compact<Index>': Compact<Index>;
    'Compact<InstanceId>': Compact<InstanceId>;
    'Compact<KeyTypeId>': Compact<KeyTypeId>;
    'Compact<LeasePeriod>': Compact<LeasePeriod>;
    'Compact<LeasePeriodOf>': Compact<LeasePeriodOf>;
    'Compact<MemberCount>': Compact<MemberCount>;
    'Compact<MessageNonce>': Compact<undefined>;
    'Compact<Moment>': Compact<Moment>;
    'Compact<MomentOf>': Compact<MomentOf>;
    'Compact<NominatorIndex>': Compact<NominatorIndex>;
    'Compact<OffchainAccuracy>': Compact<OffchainAccuracy>;
    'Compact<OverweightIndex>': Compact<OverweightIndex>;
    'Compact<PageCounter>': Compact<PageCounter>;
    'Compact<ParaId>': Compact<ParaId>;
    'Compact<ParaValidatorIndex>': Compact<ParaValidatorIndex>;
    'Compact<Perbill>': Compact<Perbill>;
    'Compact<Percent>': Compact<Percent>;
    'Compact<Permill>': Compact<Permill>;
    'Compact<Perquintill>': Compact<Perquintill>;
    'Compact<PerU16>': Compact<PerU16>;
    'Compact<Points>': Compact<Points>;
    'Compact<Priority>': Compact<Priority>;
    'Compact<PropIndex>': Compact<PropIndex>;
    'Compact<ProposalIndex>': Compact<ProposalIndex>;
    'Compact<RefCount>': Compact<RefCount>;
    'Compact<RefCountTo259>': Compact<RefCountTo259>;
    'Compact<ReferendumIndex>': Compact<ReferendumIndex>;
    'Compact<RegistrarIndex>': Compact<RegistrarIndex>;
    'Compact<RelayBlockNumber>': Compact<RelayBlockNumber>;
    'Compact<RelayChainBlockNumber>': Compact<RelayChainBlockNumber>;
    'Compact<RewardPoint>': Compact<RewardPoint>;
    'Compact<SchedulePriority>': Compact<SchedulePriority>;
    'Compact<SessionIndex>': Compact<SessionIndex>;
    'Compact<SetId>': Compact<SetId>;
    'Compact<SetIndex>': Compact<SetIndex>;
    'Compact<Si0LookupTypeId>': Compact<undefined>;
    'Compact<Slot>': Compact<Slot>;
    'Compact<SlotNumber>': Compact<SlotNumber>;
    'Compact<SpanIndex>': Compact<SpanIndex>;
    'Compact<StrikeCount>': Compact<StrikeCount>;
    'Compact<SubId>': Compact<SubId>;
    'Compact<TAssetBalance>': Compact<TAssetBalance>;
    'Compact<TAssetDepositBalance>': Compact<TAssetDepositBalance>;
    'Compact<TransactionPriority>': Compact<TransactionPriority>;
    'Compact<TrieIndex>': Compact<TrieIndex>;
    'Compact<u128>': Compact<u128>;
    'Compact<U128>': Compact<U128>;
    'Compact<u16>': Compact<u16>;
    'Compact<U16>': Compact<U16>;
    'Compact<u256>': Compact<u256>;
    'Compact<U256>': Compact<U256>;
    'Compact<u32>': Compact<u32>;
    'Compact<U32>': Compact<U32>;
    'Compact<U32F32>': Compact<U32F32>;
    'Compact<u64>': Compact<u64>;
    'Compact<U64>': Compact<U64>;
    'Compact<u8>': Compact<u8>;
    'Compact<U8>': Compact<U8>;
    'Compact<usize>': Compact<usize>;
    'Compact<USize>': Compact<USize>;
    'Compact<ValidatorCount>': Compact<ValidatorCount>;
    'Compact<ValidatorIndex>': Compact<ValidatorIndex>;
    'Compact<ValidatorSetId>': Compact<ValidatorSetId>;
    'Compact<VoteIndex>': Compact<VoteIndex>;
    'Compact<VoteWeight>': Compact<VoteWeight>;
    'Compact<Weight>': Compact<Weight>;
    'Option<AbridgedCandidateReceipt>': Option<AbridgedCandidateReceipt>;
    'Option<AbridgedHostConfiguration>': Option<AbridgedHostConfiguration>;
    'Option<AbridgedHrmpChannel>': Option<AbridgedHrmpChannel>;
    'Option<AccountData>': Option<AccountData>;
    'Option<AccountId>': Option<AccountId>;
    'Option<AccountId20>': Option<undefined>;
    'Option<AccountId32>': Option<undefined>;
    'Option<AccountId32Junction>': Option<AccountId32Junction>;
    'Option<AccountIdOf>': Option<AccountIdOf>;
    'Option<AccountIndex>': Option<AccountIndex>;
    'Option<AccountIndex64Junction>': Option<AccountIndex64Junction>;
    'Option<AccountInfo>': Option<AccountInfo>;
    'Option<AccountInfoWithDualRefCount>': Option<AccountInfoWithDualRefCount>;
    'Option<AccountInfoWithProviders>': Option<AccountInfoWithProviders>;
    'Option<AccountInfoWithRefCount>': Option<AccountInfoWithRefCount>;
    'Option<AccountInfoWithRefCountU8>': Option<AccountInfoWithRefCountU8>;
    'Option<AccountInfoWithTripleRefCount>': Option<AccountInfoWithTripleRefCount>;
    'Option<AccountKey20Junction>': Option<AccountKey20Junction>;
    'Option<AccountStatus>': Option<AccountStatus>;
    'Option<AccountValidity>': Option<AccountValidity>;
    'Option<AccountVote>': Option<AccountVote>;
    'Option<AccountVoteSplit>': Option<AccountVoteSplit>;
    'Option<AccountVoteStandard>': Option<AccountVoteStandard>;
    'Option<ActiveEraInfo>': Option<ActiveEraInfo>;
    'Option<ActiveGilt>': Option<ActiveGilt>;
    'Option<ActiveGiltsTotal>': Option<ActiveGiltsTotal>;
    'Option<ActiveIndex>': Option<ActiveIndex>;
    'Option<ActiveRecovery>': Option<ActiveRecovery>;
    'Option<Address>': Option<Address>;
    'Option<AliveContractInfo>': Option<AliveContractInfo>;
    'Option<AllowedSlots>': Option<AllowedSlots>;
    'Option<AnySignature>': Option<AnySignature>;
    'Option<ApiId>': Option<ApiId>;
    'Option<ApplyExtrinsicResult>': Option<ApplyExtrinsicResult>;
    'Option<ApprovalFlag>': Option<ApprovalFlag>;
    'Option<Approvals>': Option<Approvals>;
    'Option<ArithmeticError>': Option<ArithmeticError>;
    'Option<AssetApproval>': Option<AssetApproval>;
    'Option<AssetApprovalKey>': Option<AssetApprovalKey>;
    'Option<AssetBalance>': Option<AssetBalance>;
    'Option<AssetDestroyWitness>': Option<AssetDestroyWitness>;
    'Option<AssetDetails>': Option<AssetDetails>;
    'Option<AssetId>': Option<AssetId>;
    'Option<AssetInstance>': Option<AssetInstance>;
    'Option<AssetMetadata>': Option<AssetMetadata>;
    'Option<AssetOptions>': Option<AssetOptions>;
    'Option<AssignmentId>': Option<AssignmentId>;
    'Option<AssignmentKind>': Option<AssignmentKind>;
    'Option<AttestedCandidate>': Option<AttestedCandidate>;
    'Option<AuctionIndex>': Option<AuctionIndex>;
    'Option<AuthIndex>': Option<AuthIndex>;
    'Option<AuthorityDiscoveryId>': Option<AuthorityDiscoveryId>;
    'Option<AuthorityId>': Option<AuthorityId>;
    'Option<AuthorityIndex>': Option<AuthorityIndex>;
    'Option<AuthorityList>': Option<AuthorityList>;
    'Option<AuthoritySet>': Option<AuthoritySet>;
    'Option<AuthoritySetChange>': Option<AuthoritySetChange>;
    'Option<AuthoritySetChanges>': Option<AuthoritySetChanges>;
    'Option<AuthoritySignature>': Option<AuthoritySignature>;
    'Option<AuthorityWeight>': Option<AuthorityWeight>;
    'Option<AvailabilityBitfield>': Option<AvailabilityBitfield>;
    'Option<AvailabilityBitfieldRecord>': Option<AvailabilityBitfieldRecord>;
    'Option<BabeAuthorityWeight>': Option<BabeAuthorityWeight>;
    'Option<BabeBlockWeight>': Option<BabeBlockWeight>;
    'Option<BabeEpochConfiguration>': Option<BabeEpochConfiguration>;
    'Option<BabeEquivocationProof>': Option<BabeEquivocationProof>;
    'Option<BabeWeight>': Option<BabeWeight>;
    'Option<BackedCandidate>': Option<BackedCandidate>;
    'Option<Balance>': Option<Balance>;
    'Option<BalanceLock>': Option<BalanceLock>;
    'Option<BalanceLockTo212>': Option<BalanceLockTo212>;
    'Option<BalanceOf>': Option<BalanceOf>;
    'Option<BalanceStatus>': Option<BalanceStatus>;
    'Option<BeefyCommitment>': Option<BeefyCommitment>;
    'Option<BeefyId>': Option<BeefyId>;
    'Option<BeefyKey>': Option<BeefyKey>;
    'Option<BeefyNextAuthoritySet>': Option<BeefyNextAuthoritySet>;
    'Option<BeefyPayload>': Option<BeefyPayload>;
    'Option<BeefySignedCommitment>': Option<BeefySignedCommitment>;
    'Option<Bid>': Option<Bid>;
    'Option<Bidder>': Option<Bidder>;
    'Option<BidKind>': Option<BidKind>;
    'Option<BitVec>': Option<BitVec>;
    'Option<Block>': Option<Block>;
    'Option<BlockAttestations>': Option<BlockAttestations>;
    'Option<BlockHash>': Option<BlockHash>;
    'Option<BlockLength>': Option<BlockLength>;
    'Option<BlockNumber>': Option<BlockNumber>;
    'Option<BlockNumberFor>': Option<undefined>;
    'Option<BlockNumberOf>': Option<undefined>;
    'Option<BlockTrace>': Option<BlockTrace>;
    'Option<BlockTraceEvent>': Option<BlockTraceEvent>;
    'Option<BlockTraceEventData>': Option<BlockTraceEventData>;
    'Option<BlockTraceSpan>': Option<BlockTraceSpan>;
    'Option<BlockWeights>': Option<BlockWeights>;
    'Option<BodyId>': Option<BodyId>;
    'Option<BodyPart>': Option<BodyPart>;
    'Option<BodyPartAtLeastProportion>': Option<BodyPartAtLeastProportion>;
    'Option<BodyPartFraction>': Option<BodyPartFraction>;
    'Option<BodyPartMoreThanProportion>': Option<BodyPartMoreThanProportion>;
    'Option<bool>': Option<bool>;
    'Option<Bool>': Option<Bool>;
    'Option<Bounty>': Option<Bounty>;
    'Option<BountyIndex>': Option<BountyIndex>;
    'Option<BountyStatus>': Option<BountyStatus>;
    'Option<BountyStatusActive>': Option<BountyStatusActive>;
    'Option<BountyStatusCuratorProposed>': Option<BountyStatusCuratorProposed>;
    'Option<BountyStatusPendingPayout>': Option<BountyStatusPendingPayout>;
    'Option<BridgedBlockHash>': Option<BridgedBlockHash>;
    'Option<BridgedBlockNumber>': Option<BridgedBlockNumber>;
    'Option<BridgedHeader>': Option<BridgedHeader>;
    'Option<BufferedSessionChange>': Option<BufferedSessionChange>;
    'Option<Bytes>': Option<Bytes>;
    'Option<Call>': Option<Call>;
    'Option<CallHash>': Option<CallHash>;
    'Option<CallHashOf>': Option<CallHashOf>;
    'Option<CallIndex>': Option<CallIndex>;
    'Option<CandidateCommitments>': Option<CandidateCommitments>;
    'Option<CandidateDescriptor>': Option<CandidateDescriptor>;
    'Option<CandidateHash>': Option<CandidateHash>;
    'Option<CandidateInfo>': Option<CandidateInfo>;
    'Option<CandidatePendingAvailability>': Option<CandidatePendingAvailability>;
    'Option<CandidateReceipt>': Option<CandidateReceipt>;
    'Option<ChainId>': Option<undefined>;
    'Option<ChainProperties>': Option<ChainProperties>;
    'Option<ChainType>': Option<ChainType>;
    'Option<ChangesTrieConfiguration>': Option<ChangesTrieConfiguration>;
    'Option<ChangesTrieSignal>': Option<ChangesTrieSignal>;
    'Option<ClassDetails>': Option<ClassDetails>;
    'Option<ClassId>': Option<ClassId>;
    'Option<ClassMetadata>': Option<ClassMetadata>;
    'Option<CodecHash>': Option<CodecHash>;
    'Option<CodeHash>': Option<CodeHash>;
    'Option<CollatorId>': Option<CollatorId>;
    'Option<CollatorSignature>': Option<CollatorSignature>;
    'Option<CollectiveOrigin>': Option<CollectiveOrigin>;
    'Option<CommittedCandidateReceipt>': Option<CommittedCandidateReceipt>;
    'Option<CompactAssignments>': Option<CompactAssignments>;
    'Option<CompactAssignmentsTo257>': Option<CompactAssignmentsTo257>;
    'Option<CompactAssignmentsTo265>': Option<CompactAssignmentsTo265>;
    'Option<CompactAssignmentsWith16>': Option<CompactAssignmentsWith16>;
    'Option<CompactAssignmentsWith24>': Option<CompactAssignmentsWith24>;
    'Option<CompactScore>': Option<CompactScore>;
    'Option<CompactScoreCompact>': Option<CompactScoreCompact>;
    'Option<ConfigData>': Option<ConfigData>;
    'Option<Consensus>': Option<Consensus>;
    'Option<ConsensusEngineId>': Option<ConsensusEngineId>;
    'Option<ConsumedWeight>': Option<ConsumedWeight>;
    'Option<ContractCallRequest>': Option<ContractCallRequest>;
    'Option<ContractConstructorSpec>': Option<ContractConstructorSpec>;
    'Option<ContractContractSpec>': Option<ContractContractSpec>;
    'Option<ContractCryptoHasher>': Option<ContractCryptoHasher>;
    'Option<ContractDiscriminant>': Option<ContractDiscriminant>;
    'Option<ContractDisplayName>': Option<ContractDisplayName>;
    'Option<ContractEventParamSpec>': Option<ContractEventParamSpec>;
    'Option<ContractEventSpec>': Option<ContractEventSpec>;
    'Option<ContractExecResult>': Option<ContractExecResult>;
    'Option<ContractExecResultErr>': Option<ContractExecResultErr>;
    'Option<ContractExecResultErrModule>': Option<ContractExecResultErrModule>;
    'Option<ContractExecResultOk>': Option<ContractExecResultOk>;
    'Option<ContractExecResultResult>': Option<ContractExecResultResult>;
    'Option<ContractExecResultSuccessTo255>': Option<ContractExecResultSuccessTo255>;
    'Option<ContractExecResultSuccessTo260>': Option<ContractExecResultSuccessTo260>;
    'Option<ContractExecResultTo255>': Option<ContractExecResultTo255>;
    'Option<ContractExecResultTo260>': Option<ContractExecResultTo260>;
    'Option<ContractExecResultTo267>': Option<undefined>;
    'Option<ContractInfo>': Option<ContractInfo>;
    'Option<ContractInstantiateResult>': Option<ContractInstantiateResult>;
    'Option<ContractLayoutArray>': Option<ContractLayoutArray>;
    'Option<ContractLayoutCell>': Option<ContractLayoutCell>;
    'Option<ContractLayoutEnum>': Option<ContractLayoutEnum>;
    'Option<ContractLayoutHash>': Option<ContractLayoutHash>;
    'Option<ContractLayoutHashingStrategy>': Option<ContractLayoutHashingStrategy>;
    'Option<ContractLayoutKey>': Option<ContractLayoutKey>;
    'Option<ContractLayoutStruct>': Option<ContractLayoutStruct>;
    'Option<ContractLayoutStructField>': Option<ContractLayoutStructField>;
    'Option<ContractMessageParamSpec>': Option<ContractMessageParamSpec>;
    'Option<ContractMessageSpec>': Option<ContractMessageSpec>;
    'Option<ContractProject>': Option<ContractProject>;
    'Option<ContractProjectContract>': Option<ContractProjectContract>;
    'Option<ContractProjectSource>': Option<ContractProjectSource>;
    'Option<ContractSelector>': Option<ContractSelector>;
    'Option<ContractStorageKey>': Option<ContractStorageKey>;
    'Option<ContractStorageLayout>': Option<ContractStorageLayout>;
    'Option<ContractTypeSpec>': Option<ContractTypeSpec>;
    'Option<Conviction>': Option<Conviction>;
    'Option<CoreAssignment>': Option<CoreAssignment>;
    'Option<CoreIndex>': Option<CoreIndex>;
    'Option<CoreOccupied>': Option<CoreOccupied>;
    'Option<CreatedBlock>': Option<CreatedBlock>;
    'Option<Data>': Option<Data>;
    'Option<DeferredOffenceOf>': Option<DeferredOffenceOf>;
    'Option<DefunctVoter>': Option<DefunctVoter>;
    'Option<DelayKind>': Option<DelayKind>;
    'Option<DelayKindBest>': Option<DelayKindBest>;
    'Option<Delegations>': Option<Delegations>;
    'Option<DeletedContract>': Option<DeletedContract>;
    'Option<DepositBalance>': Option<DepositBalance>;
    'Option<DepositBalanceOf>': Option<DepositBalanceOf>;
    'Option<DestroyWitness>': Option<DestroyWitness>;
    'Option<Digest>': Option<Digest>;
    'Option<DigestItem>': Option<DigestItem>;
    'Option<DigestOf>': Option<DigestOf>;
    'Option<DispatchClass>': Option<DispatchClass>;
    'Option<DispatchError>': Option<DispatchError>;
    'Option<DispatchErrorModule>': Option<DispatchErrorModule>;
    'Option<DispatchErrorTo198>': Option<DispatchErrorTo198>;
    'Option<DispatchInfo>': Option<DispatchInfo>;
    'Option<DispatchInfoTo190>': Option<DispatchInfoTo190>;
    'Option<DispatchInfoTo244>': Option<DispatchInfoTo244>;
    'Option<DispatchOutcome>': Option<DispatchOutcome>;
    'Option<DispatchResult>': Option<DispatchResult>;
    'Option<DispatchResultOf>': Option<DispatchResultOf>;
    'Option<DispatchResultTo198>': Option<DispatchResultTo198>;
    'Option<DisputeStatement>': Option<DisputeStatement>;
    'Option<DisputeStatementSet>': Option<DisputeStatementSet>;
    'Option<DoubleEncodedCall>': Option<DoubleEncodedCall>;
    'Option<DoubleVoteReport>': Option<DoubleVoteReport>;
    'Option<DownwardMessage>': Option<DownwardMessage>;
    'Option<EcdsaSignature>': Option<EcdsaSignature>;
    'Option<Ed25519Signature>': Option<Ed25519Signature>;
    'Option<ElectionCompute>': Option<ElectionCompute>;
    'Option<ElectionPhase>': Option<ElectionPhase>;
    'Option<ElectionResult>': Option<ElectionResult>;
    'Option<ElectionScore>': Option<ElectionScore>;
    'Option<ElectionSize>': Option<ElectionSize>;
    'Option<ElectionStatus>': Option<ElectionStatus>;
    'Option<EncodedFinalityProofs>': Option<EncodedFinalityProofs>;
    'Option<EncodedJustification>': Option<EncodedJustification>;
    'Option<EpochAuthorship>': Option<EpochAuthorship>;
    'Option<Era>': Option<undefined>;
    'Option<EraIndex>': Option<EraIndex>;
    'Option<EraPoints>': Option<EraPoints>;
    'Option<EraRewardPoints>': Option<EraRewardPoints>;
    'Option<EraRewards>': Option<EraRewards>;
    'Option<ErrorMetadataLatest>': Option<ErrorMetadataLatest>;
    'Option<ErrorMetadataV10>': Option<ErrorMetadataV10>;
    'Option<ErrorMetadataV11>': Option<ErrorMetadataV11>;
    'Option<ErrorMetadataV12>': Option<ErrorMetadataV12>;
    'Option<ErrorMetadataV13>': Option<ErrorMetadataV13>;
    'Option<ErrorMetadataV14>': Option<undefined>;
    'Option<ErrorMetadataV9>': Option<ErrorMetadataV9>;
    'Option<EthAccount>': Option<EthAccount>;
    'Option<EthBlock>': Option<EthBlock>;
    'Option<EthBloom>': Option<EthBloom>;
    'Option<EthCallRequest>': Option<EthCallRequest>;
    'Option<EthereumAccountId>': Option<EthereumAccountId>;
    'Option<EthereumAddress>': Option<EthereumAddress>;
    'Option<EthereumLookupSource>': Option<EthereumLookupSource>;
    'Option<EthereumSignature>': Option<EthereumSignature>;
    'Option<EthFilter>': Option<EthFilter>;
    'Option<EthFilterAddress>': Option<EthFilterAddress>;
    'Option<EthFilterChanges>': Option<EthFilterChanges>;
    'Option<EthFilterTopic>': Option<EthFilterTopic>;
    'Option<EthFilterTopicEntry>': Option<EthFilterTopicEntry>;
    'Option<EthFilterTopicInner>': Option<EthFilterTopicInner>;
    'Option<EthHeader>': Option<EthHeader>;
    'Option<EthLog>': Option<EthLog>;
    'Option<EthReceipt>': Option<EthReceipt>;
    'Option<EthRichBlock>': Option<EthRichBlock>;
    'Option<EthRichHeader>': Option<EthRichHeader>;
    'Option<EthStorageProof>': Option<EthStorageProof>;
    'Option<EthSubKind>': Option<EthSubKind>;
    'Option<EthSubParams>': Option<EthSubParams>;
    'Option<EthSubResult>': Option<EthSubResult>;
    'Option<EthSyncInfo>': Option<EthSyncInfo>;
    'Option<EthSyncStatus>': Option<EthSyncStatus>;
    'Option<EthTransaction>': Option<EthTransaction>;
    'Option<EthTransactionAction>': Option<EthTransactionAction>;
    'Option<EthTransactionCondition>': Option<EthTransactionCondition>;
    'Option<EthTransactionRequest>': Option<EthTransactionRequest>;
    'Option<EthTransactionSignature>': Option<EthTransactionSignature>;
    'Option<EthTransactionStatus>': Option<EthTransactionStatus>;
    'Option<EthWork>': Option<EthWork>;
    'Option<Event>': Option<Event>;
    'Option<EventId>': Option<EventId>;
    'Option<EventIndex>': Option<EventIndex>;
    'Option<EventMetadataLatest>': Option<EventMetadataLatest>;
    'Option<EventMetadataV10>': Option<EventMetadataV10>;
    'Option<EventMetadataV11>': Option<EventMetadataV11>;
    'Option<EventMetadataV12>': Option<EventMetadataV12>;
    'Option<EventMetadataV13>': Option<EventMetadataV13>;
    'Option<EventMetadataV14>': Option<undefined>;
    'Option<EventMetadataV9>': Option<EventMetadataV9>;
    'Option<EventRecord>': Option<EventRecord>;
    'Option<EvmAccount>': Option<EvmAccount>;
    'Option<EvmLog>': Option<EvmLog>;
    'Option<EvmVicinity>': Option<EvmVicinity>;
    'Option<ExecReturnValue>': Option<ExecReturnValue>;
    'Option<ExitError>': Option<ExitError>;
    'Option<ExitFatal>': Option<ExitFatal>;
    'Option<ExitReason>': Option<ExitReason>;
    'Option<ExitRevert>': Option<ExitRevert>;
    'Option<ExitSucceed>': Option<ExitSucceed>;
    'Option<ExplicitDisputeStatement>': Option<ExplicitDisputeStatement>;
    'Option<Exposure>': Option<Exposure>;
    'Option<ExtendedBalance>': Option<ExtendedBalance>;
    'Option<Extrinsic>': Option<Extrinsic>;
    'Option<ExtrinsicEra>': Option<ExtrinsicEra>;
    'Option<ExtrinsicMetadataLatest>': Option<ExtrinsicMetadataLatest>;
    'Option<ExtrinsicMetadataV11>': Option<ExtrinsicMetadataV11>;
    'Option<ExtrinsicMetadataV12>': Option<ExtrinsicMetadataV12>;
    'Option<ExtrinsicMetadataV13>': Option<ExtrinsicMetadataV13>;
    'Option<ExtrinsicMetadataV14>': Option<undefined>;
    'Option<ExtrinsicOrHash>': Option<ExtrinsicOrHash>;
    'Option<ExtrinsicPayload>': Option<ExtrinsicPayload>;
    'Option<ExtrinsicPayloadUnknown>': Option<ExtrinsicPayloadUnknown>;
    'Option<ExtrinsicPayloadV4>': Option<ExtrinsicPayloadV4>;
    'Option<ExtrinsicSignature>': Option<ExtrinsicSignature>;
    'Option<ExtrinsicSignatureV4>': Option<ExtrinsicSignatureV4>;
    'Option<ExtrinsicStatus>': Option<ExtrinsicStatus>;
    'Option<ExtrinsicsWeight>': Option<ExtrinsicsWeight>;
    'Option<ExtrinsicUnknown>': Option<ExtrinsicUnknown>;
    'Option<ExtrinsicV4>': Option<ExtrinsicV4>;
    'Option<FeeDetails>': Option<FeeDetails>;
    'Option<Fixed128>': Option<Fixed128>;
    'Option<Fixed64>': Option<Fixed64>;
    'Option<FixedI128>': Option<FixedI128>;
    'Option<FixedI64>': Option<FixedI64>;
    'Option<FixedU128>': Option<FixedU128>;
    'Option<FixedU64>': Option<FixedU64>;
    'Option<Forcing>': Option<Forcing>;
    'Option<ForkTreePendingChange>': Option<ForkTreePendingChange>;
    'Option<ForkTreePendingChangeNode>': Option<ForkTreePendingChangeNode>;
    'Option<FullIdentification>': Option<FullIdentification>;
    'Option<FunctionArgumentMetadataLatest>': Option<FunctionArgumentMetadataLatest>;
    'Option<FunctionArgumentMetadataV10>': Option<FunctionArgumentMetadataV10>;
    'Option<FunctionArgumentMetadataV11>': Option<FunctionArgumentMetadataV11>;
    'Option<FunctionArgumentMetadataV12>': Option<FunctionArgumentMetadataV12>;
    'Option<FunctionArgumentMetadataV13>': Option<FunctionArgumentMetadataV13>;
    'Option<FunctionArgumentMetadataV14>': Option<undefined>;
    'Option<FunctionArgumentMetadataV9>': Option<FunctionArgumentMetadataV9>;
    'Option<FunctionMetadataLatest>': Option<FunctionMetadataLatest>;
    'Option<FunctionMetadataV10>': Option<FunctionMetadataV10>;
    'Option<FunctionMetadataV11>': Option<FunctionMetadataV11>;
    'Option<FunctionMetadataV12>': Option<FunctionMetadataV12>;
    'Option<FunctionMetadataV13>': Option<FunctionMetadataV13>;
    'Option<FunctionMetadataV14>': Option<undefined>;
    'Option<FunctionMetadataV9>': Option<FunctionMetadataV9>;
    'Option<FundIndex>': Option<FundIndex>;
    'Option<FundInfo>': Option<FundInfo>;
    'Option<Gas>': Option<Gas>;
    'Option<GiltBid>': Option<GiltBid>;
    'Option<GlobalValidationData>': Option<GlobalValidationData>;
    'Option<GlobalValidationSchedule>': Option<GlobalValidationSchedule>;
    'Option<GrandpaCommit>': Option<GrandpaCommit>;
    'Option<GrandpaEquivocation>': Option<GrandpaEquivocation>;
    'Option<GrandpaEquivocationProof>': Option<GrandpaEquivocationProof>;
    'Option<GrandpaEquivocationValue>': Option<GrandpaEquivocationValue>;
    'Option<GrandpaJustification>': Option<GrandpaJustification>;
    'Option<GrandpaPrecommit>': Option<GrandpaPrecommit>;
    'Option<GrandpaPrevote>': Option<GrandpaPrevote>;
    'Option<GrandpaSignedPrecommit>': Option<GrandpaSignedPrecommit>;
    'Option<GroupIndex>': Option<GroupIndex>;
    'Option<H1024>': Option<H1024>;
    'Option<H128>': Option<H128>;
    'Option<H160>': Option<H160>;
    'Option<H2048>': Option<H2048>;
    'Option<H256>': Option<H256>;
    'Option<H32>': Option<H32>;
    'Option<H512>': Option<H512>;
    'Option<H64>': Option<H64>;
    'Option<Hash>': Option<Hash>;
    'Option<HeadData>': Option<HeadData>;
    'Option<Header>': Option<Header>;
    'Option<HeaderPartial>': Option<HeaderPartial>;
    'Option<Health>': Option<Health>;
    'Option<Heartbeat>': Option<Heartbeat>;
    'Option<HeartbeatTo244>': Option<HeartbeatTo244>;
    'Option<HostConfiguration>': Option<HostConfiguration>;
    'Option<HostFnWeights>': Option<HostFnWeights>;
    'Option<HostFnWeightsTo264>': Option<HostFnWeightsTo264>;
    'Option<HrmpChannel>': Option<HrmpChannel>;
    'Option<HrmpChannelId>': Option<HrmpChannelId>;
    'Option<HrmpOpenChannelRequest>': Option<HrmpOpenChannelRequest>;
    'Option<i128>': Option<i128>;
    'Option<I128>': Option<I128>;
    'Option<i16>': Option<i16>;
    'Option<I16>': Option<I16>;
    'Option<i256>': Option<i256>;
    'Option<I256>': Option<I256>;
    'Option<i32>': Option<i32>;
    'Option<I32>': Option<I32>;
    'Option<I32F32>': Option<I32F32>;
    'Option<i64>': Option<i64>;
    'Option<I64>': Option<I64>;
    'Option<i8>': Option<i8>;
    'Option<I8>': Option<I8>;
    'Option<Id>': Option<undefined>;
    'Option<IdentificationTuple>': Option<IdentificationTuple>;
    'Option<IdentityFields>': Option<IdentityFields>;
    'Option<IdentityInfo>': Option<IdentityInfo>;
    'Option<IdentityInfoAdditional>': Option<IdentityInfoAdditional>;
    'Option<IdentityJudgement>': Option<IdentityJudgement>;
    'Option<ImmortalEra>': Option<ImmortalEra>;
    'Option<ImportedAux>': Option<ImportedAux>;
    'Option<InboundDownwardMessage>': Option<InboundDownwardMessage>;
    'Option<InboundHrmpMessage>': Option<InboundHrmpMessage>;
    'Option<InboundHrmpMessages>': Option<InboundHrmpMessages>;
    'Option<InboundStatus>': Option<InboundStatus>;
    'Option<IncludedBlocks>': Option<IncludedBlocks>;
    'Option<InclusionFee>': Option<InclusionFee>;
    'Option<IncomingParachain>': Option<IncomingParachain>;
    'Option<IncomingParachainDeploy>': Option<IncomingParachainDeploy>;
    'Option<IncomingParachainFixed>': Option<IncomingParachainFixed>;
    'Option<Index>': Option<Index>;
    'Option<IndicesLookupSource>': Option<IndicesLookupSource>;
    'Option<IndividualExposure>': Option<IndividualExposure>;
    'Option<InitializationData>': Option<InitializationData>;
    'Option<InstanceDetails>': Option<InstanceDetails>;
    'Option<InstanceId>': Option<InstanceId>;
    'Option<InstanceMetadata>': Option<InstanceMetadata>;
    'Option<InstantiateRequest>': Option<InstantiateRequest>;
    'Option<InstantiateReturnValue>': Option<InstantiateReturnValue>;
    'Option<InstructionWeights>': Option<InstructionWeights>;
    'Option<IntermediateMessage>': Option<undefined>;
    'Option<InvalidDisputeStatementKind>': Option<InvalidDisputeStatementKind>;
    'Option<InvalidTransaction>': Option<InvalidTransaction>;
    'Option<Json>': Option<Json>;
    'Option<Junction>': Option<Junction>;
    'Option<Justification>': Option<Justification>;
    'Option<JustificationNotification>': Option<JustificationNotification>;
    'Option<Justifications>': Option<Justifications>;
    'Option<Key>': Option<Key>;
    'Option<KeyOwnerProof>': Option<KeyOwnerProof>;
    'Option<Keys>': Option<Keys>;
    'Option<KeyType>': Option<KeyType>;
    'Option<KeyTypeId>': Option<KeyTypeId>;
    'Option<KeyValue>': Option<KeyValue>;
    'Option<KeyValueOption>': Option<KeyValueOption>;
    'Option<Kind>': Option<Kind>;
    'Option<LaneId>': Option<undefined>;
    'Option<LastContribution>': Option<LastContribution>;
    'Option<LastRuntimeUpgradeInfo>': Option<LastRuntimeUpgradeInfo>;
    'Option<LeasePeriod>': Option<LeasePeriod>;
    'Option<LeasePeriodOf>': Option<LeasePeriodOf>;
    'Option<Limits>': Option<Limits>;
    'Option<LimitsTo264>': Option<LimitsTo264>;
    'Option<LocalValidationData>': Option<LocalValidationData>;
    'Option<LockIdentifier>': Option<LockIdentifier>;
    'Option<LookupSource>': Option<LookupSource>;
    'Option<LookupTarget>': Option<LookupTarget>;
    'Option<LotteryConfig>': Option<LotteryConfig>;
    'Option<MaybeRandomness>': Option<MaybeRandomness>;
    'Option<MaybeVrf>': Option<MaybeVrf>;
    'Option<MemberCount>': Option<MemberCount>;
    'Option<MembershipProof>': Option<MembershipProof>;
    'Option<Message>': Option<Message>;
    'Option<MessageError>': Option<MessageError>;
    'Option<MessageId>': Option<MessageId>;
    'Option<MessageIngestionType>': Option<MessageIngestionType>;
    'Option<MessageKey>': Option<undefined>;
    'Option<MessageNonce>': Option<undefined>;
    'Option<MessageQueueChain>': Option<MessageQueueChain>;
    'Option<MessagingStateSnapshot>': Option<MessagingStateSnapshot>;
    'Option<MessagingStateSnapshotEgressEntry>': Option<MessagingStateSnapshotEgressEntry>;
    'Option<MetadataAll>': Option<MetadataAll>;
    'Option<MetadataLatest>': Option<MetadataLatest>;
    'Option<MetadataV10>': Option<MetadataV10>;
    'Option<MetadataV11>': Option<MetadataV11>;
    'Option<MetadataV12>': Option<MetadataV12>;
    'Option<MetadataV13>': Option<MetadataV13>;
    'Option<MetadataV14>': Option<undefined>;
    'Option<MetadataV9>': Option<MetadataV9>;
    'Option<MmrLeafProof>': Option<MmrLeafProof>;
    'Option<MmrRootHash>': Option<MmrRootHash>;
    'Option<ModuleConstantMetadataLatest>': Option<ModuleConstantMetadataLatest>;
    'Option<ModuleConstantMetadataV10>': Option<ModuleConstantMetadataV10>;
    'Option<ModuleConstantMetadataV11>': Option<ModuleConstantMetadataV11>;
    'Option<ModuleConstantMetadataV12>': Option<ModuleConstantMetadataV12>;
    'Option<ModuleConstantMetadataV13>': Option<ModuleConstantMetadataV13>;
    'Option<ModuleConstantMetadataV9>': Option<ModuleConstantMetadataV9>;
    'Option<ModuleId>': Option<ModuleId>;
    'Option<ModuleMetadataLatest>': Option<ModuleMetadataLatest>;
    'Option<ModuleMetadataV10>': Option<ModuleMetadataV10>;
    'Option<ModuleMetadataV11>': Option<ModuleMetadataV11>;
    'Option<ModuleMetadataV12>': Option<ModuleMetadataV12>;
    'Option<ModuleMetadataV13>': Option<ModuleMetadataV13>;
    'Option<ModuleMetadataV9>': Option<ModuleMetadataV9>;
    'Option<Moment>': Option<Moment>;
    'Option<MomentOf>': Option<MomentOf>;
    'Option<MoreAttestations>': Option<MoreAttestations>;
    'Option<MortalEra>': Option<MortalEra>;
    'Option<MultiAddress>': Option<MultiAddress>;
    'Option<MultiAsset>': Option<MultiAsset>;
    'Option<MultiAssetAbstractFungible>': Option<MultiAssetAbstractFungible>;
    'Option<MultiAssetAbstractNonFungible>': Option<MultiAssetAbstractNonFungible>;
    'Option<MultiAssetConcreteFungible>': Option<MultiAssetConcreteFungible>;
    'Option<MultiAssetConcreteNonFungible>': Option<MultiAssetConcreteNonFungible>;
    'Option<MultiDisputeStatementSet>': Option<MultiDisputeStatementSet>;
    'Option<MultiLocation>': Option<MultiLocation>;
    'Option<Multiplier>': Option<Multiplier>;
    'Option<Multisig>': Option<Multisig>;
    'Option<MultiSignature>': Option<MultiSignature>;
    'Option<MultiSigner>': Option<MultiSigner>;
    'Option<NetworkId>': Option<NetworkId>;
    'Option<NetworkState>': Option<NetworkState>;
    'Option<NetworkStatePeerset>': Option<NetworkStatePeerset>;
    'Option<NetworkStatePeersetInfo>': Option<NetworkStatePeersetInfo>;
    'Option<NewBidder>': Option<NewBidder>;
    'Option<NextAuthority>': Option<NextAuthority>;
    'Option<NextConfigDescriptor>': Option<NextConfigDescriptor>;
    'Option<NextConfigDescriptorV1>': Option<NextConfigDescriptorV1>;
    'Option<Node>': Option<Node>;
    'Option<NodeRole>': Option<NodeRole>;
    'Option<Nominations>': Option<Nominations>;
    'Option<NominatorIndex>': Option<NominatorIndex>;
    'Option<NominatorIndexCompact>': Option<NominatorIndexCompact>;
    'Option<NotConnectedPeer>': Option<NotConnectedPeer>;
    'Option<Null>': Option<Null>;
    'Option<OffchainAccuracy>': Option<OffchainAccuracy>;
    'Option<OffchainAccuracyCompact>': Option<OffchainAccuracyCompact>;
    'Option<OffenceDetails>': Option<OffenceDetails>;
    'Option<Offender>': Option<Offender>;
    'Option<OpaqueCall>': Option<OpaqueCall>;
    'Option<OpaqueMultiaddr>': Option<OpaqueMultiaddr>;
    'Option<OpaqueNetworkState>': Option<OpaqueNetworkState>;
    'Option<OpaquePeerId>': Option<OpaquePeerId>;
    'Option<OpaqueTimeSlot>': Option<OpaqueTimeSlot>;
    'Option<OpenTip>': Option<OpenTip>;
    'Option<OpenTipFinderTo225>': Option<OpenTipFinderTo225>;
    'Option<OpenTipTip>': Option<OpenTipTip>;
    'Option<OpenTipTo225>': Option<OpenTipTo225>;
    'Option<Origin>': Option<Origin>;
    'Option<OriginCaller>': Option<OriginCaller>;
    'Option<OutboundHrmpMessage>': Option<OutboundHrmpMessage>;
    'Option<OutboundStatus>': Option<OutboundStatus>;
    'Option<Outcome>': Option<Outcome>;
    'Option<OverweightIndex>': Option<OverweightIndex>;
    'Option<Owner>': Option<Owner>;
    'Option<PageCounter>': Option<PageCounter>;
    'Option<PageIndexData>': Option<PageIndexData>;
    'Option<PalletId>': Option<PalletId>;
    'Option<PalletsOrigin>': Option<PalletsOrigin>;
    'Option<PalletVersion>': Option<PalletVersion>;
    'Option<ParachainDispatchOrigin>': Option<ParachainDispatchOrigin>;
    'Option<ParachainInherentData>': Option<ParachainInherentData>;
    'Option<ParachainProposal>': Option<ParachainProposal>;
    'Option<ParachainsInherentData>': Option<ParachainsInherentData>;
    'Option<ParaGenesisArgs>': Option<ParaGenesisArgs>;
    'Option<ParaId>': Option<ParaId>;
    'Option<ParaInfo>': Option<ParaInfo>;
    'Option<ParaLifecycle>': Option<ParaLifecycle>;
    'Option<ParaPastCodeMeta>': Option<ParaPastCodeMeta>;
    'Option<ParaScheduling>': Option<ParaScheduling>;
    'Option<ParathreadClaim>': Option<ParathreadClaim>;
    'Option<ParathreadClaimQueue>': Option<ParathreadClaimQueue>;
    'Option<ParathreadEntry>': Option<ParathreadEntry>;
    'Option<ParaValidatorIndex>': Option<ParaValidatorIndex>;
    'Option<Pays>': Option<Pays>;
    'Option<Peer>': Option<Peer>;
    'Option<PeerEndpoint>': Option<PeerEndpoint>;
    'Option<PeerEndpointAddr>': Option<PeerEndpointAddr>;
    'Option<PeerInfo>': Option<PeerInfo>;
    'Option<PeerPing>': Option<PeerPing>;
    'Option<PendingChange>': Option<PendingChange>;
    'Option<PendingPause>': Option<PendingPause>;
    'Option<PendingResume>': Option<PendingResume>;
    'Option<Perbill>': Option<Perbill>;
    'Option<Percent>': Option<Percent>;
    'Option<PerDispatchClassU32>': Option<PerDispatchClassU32>;
    'Option<PerDispatchClassWeight>': Option<PerDispatchClassWeight>;
    'Option<PerDispatchClassWeightsPerClass>': Option<PerDispatchClassWeightsPerClass>;
    'Option<Period>': Option<Period>;
    'Option<Permill>': Option<Permill>;
    'Option<PermissionLatest>': Option<PermissionLatest>;
    'Option<PermissionsV1>': Option<PermissionsV1>;
    'Option<PermissionVersions>': Option<PermissionVersions>;
    'Option<Perquintill>': Option<Perquintill>;
    'Option<PersistedValidationData>': Option<PersistedValidationData>;
    'Option<PerU16>': Option<PerU16>;
    'Option<Phantom>': Option<Phantom>;
    'Option<PhantomData>': Option<PhantomData>;
    'Option<Phase>': Option<Phase>;
    'Option<PhragmenScore>': Option<PhragmenScore>;
    'Option<PluralityJunction>': Option<PluralityJunction>;
    'Option<Points>': Option<Points>;
    'Option<Precommits>': Option<Precommits>;
    'Option<PrefabWasmModule>': Option<PrefabWasmModule>;
    'Option<PrefixedStorageKey>': Option<PrefixedStorageKey>;
    'Option<PreimageStatus>': Option<PreimageStatus>;
    'Option<PreimageStatusAvailable>': Option<PreimageStatusAvailable>;
    'Option<PreRuntime>': Option<PreRuntime>;
    'Option<Prevotes>': Option<Prevotes>;
    'Option<Priority>': Option<Priority>;
    'Option<PriorLock>': Option<PriorLock>;
    'Option<PropIndex>': Option<PropIndex>;
    'Option<Proposal>': Option<Proposal>;
    'Option<ProposalIndex>': Option<ProposalIndex>;
    'Option<ProxyAnnouncement>': Option<ProxyAnnouncement>;
    'Option<ProxyDefinition>': Option<ProxyDefinition>;
    'Option<ProxyState>': Option<ProxyState>;
    'Option<ProxyType>': Option<ProxyType>;
    'Option<QueueConfigData>': Option<QueueConfigData>;
    'Option<QueuedParathread>': Option<QueuedParathread>;
    'Option<Randomness>': Option<Randomness>;
    'Option<Raw>': Option<Raw>;
    'Option<RawAuraPreDigest>': Option<RawAuraPreDigest>;
    'Option<RawBabePreDigest>': Option<RawBabePreDigest>;
    'Option<RawBabePreDigestCompat>': Option<RawBabePreDigestCompat>;
    'Option<RawBabePreDigestPrimary>': Option<RawBabePreDigestPrimary>;
    'Option<RawBabePreDigestPrimaryTo159>': Option<RawBabePreDigestPrimaryTo159>;
    'Option<RawBabePreDigestSecondaryPlain>': Option<RawBabePreDigestSecondaryPlain>;
    'Option<RawBabePreDigestSecondaryTo159>': Option<RawBabePreDigestSecondaryTo159>;
    'Option<RawBabePreDigestSecondaryVRF>': Option<RawBabePreDigestSecondaryVRF>;
    'Option<RawBabePreDigestTo159>': Option<RawBabePreDigestTo159>;
    'Option<RawOrigin>': Option<RawOrigin>;
    'Option<RawSolution>': Option<RawSolution>;
    'Option<RawSolutionTo265>': Option<RawSolutionTo265>;
    'Option<RawSolutionWith16>': Option<RawSolutionWith16>;
    'Option<RawSolutionWith24>': Option<RawSolutionWith24>;
    'Option<RawVRFOutput>': Option<RawVRFOutput>;
    'Option<ReadProof>': Option<ReadProof>;
    'Option<ReadySolution>': Option<ReadySolution>;
    'Option<Reasons>': Option<Reasons>;
    'Option<RecoveryConfig>': Option<RecoveryConfig>;
    'Option<RefCount>': Option<RefCount>;
    'Option<RefCountTo259>': Option<RefCountTo259>;
    'Option<ReferendumIndex>': Option<ReferendumIndex>;
    'Option<ReferendumInfo>': Option<ReferendumInfo>;
    'Option<ReferendumInfoFinished>': Option<ReferendumInfoFinished>;
    'Option<ReferendumInfoTo239>': Option<ReferendumInfoTo239>;
    'Option<ReferendumStatus>': Option<ReferendumStatus>;
    'Option<RegisteredParachainInfo>': Option<RegisteredParachainInfo>;
    'Option<RegistrarIndex>': Option<RegistrarIndex>;
    'Option<RegistrarInfo>': Option<RegistrarInfo>;
    'Option<Registration>': Option<Registration>;
    'Option<RegistrationJudgement>': Option<RegistrationJudgement>;
    'Option<RelayBlockNumber>': Option<RelayBlockNumber>;
    'Option<RelayChainBlockNumber>': Option<RelayChainBlockNumber>;
    'Option<RelayChainHash>': Option<RelayChainHash>;
    'Option<RelayHash>': Option<RelayHash>;
    'Option<Releases>': Option<Releases>;
    'Option<Remark>': Option<Remark>;
    'Option<Renouncing>': Option<Renouncing>;
    'Option<RentProjection>': Option<RentProjection>;
    'Option<ReportedRoundStates>': Option<ReportedRoundStates>;
    'Option<Reporter>': Option<Reporter>;
    'Option<ReportIdOf>': Option<ReportIdOf>;
    'Option<ReserveData>': Option<ReserveData>;
    'Option<ReserveIdentifier>': Option<ReserveIdentifier>;
    'Option<Retriable>': Option<Retriable>;
    'Option<RewardDestination>': Option<RewardDestination>;
    'Option<RewardPoint>': Option<RewardPoint>;
    'Option<RoundSnapshot>': Option<RoundSnapshot>;
    'Option<RoundState>': Option<RoundState>;
    'Option<RpcMethods>': Option<RpcMethods>;
    'Option<RuntimeDbWeight>': Option<RuntimeDbWeight>;
    'Option<RuntimeDispatchInfo>': Option<RuntimeDispatchInfo>;
    'Option<RuntimeVersion>': Option<RuntimeVersion>;
    'Option<RuntimeVersionApi>': Option<RuntimeVersionApi>;
    'Option<RuntimeVersionPartial>': Option<RuntimeVersionPartial>;
    'Option<Schedule>': Option<Schedule>;
    'Option<Scheduled>': Option<Scheduled>;
    'Option<ScheduledTo254>': Option<ScheduledTo254>;
    'Option<SchedulePeriod>': Option<SchedulePeriod>;
    'Option<SchedulePriority>': Option<SchedulePriority>;
    'Option<ScheduleTo212>': Option<ScheduleTo212>;
    'Option<ScheduleTo258>': Option<ScheduleTo258>;
    'Option<ScheduleTo264>': Option<ScheduleTo264>;
    'Option<Scheduling>': Option<Scheduling>;
    'Option<Seal>': Option<Seal>;
    'Option<SealV0>': Option<SealV0>;
    'Option<SeatHolder>': Option<SeatHolder>;
    'Option<SeedOf>': Option<SeedOf>;
    'Option<ServiceQuality>': Option<ServiceQuality>;
    'Option<SessionIndex>': Option<SessionIndex>;
    'Option<SessionInfo>': Option<SessionInfo>;
    'Option<SessionInfoValidatorGroup>': Option<SessionInfoValidatorGroup>;
    'Option<SessionKeys1>': Option<SessionKeys1>;
    'Option<SessionKeys10>': Option<SessionKeys10>;
    'Option<SessionKeys10B>': Option<SessionKeys10B>;
    'Option<SessionKeys2>': Option<SessionKeys2>;
    'Option<SessionKeys3>': Option<SessionKeys3>;
    'Option<SessionKeys4>': Option<SessionKeys4>;
    'Option<SessionKeys5>': Option<SessionKeys5>;
    'Option<SessionKeys6>': Option<SessionKeys6>;
    'Option<SessionKeys6B>': Option<SessionKeys6B>;
    'Option<SessionKeys7>': Option<SessionKeys7>;
    'Option<SessionKeys7B>': Option<SessionKeys7B>;
    'Option<SessionKeys8>': Option<SessionKeys8>;
    'Option<SessionKeys8B>': Option<SessionKeys8B>;
    'Option<SessionKeys9>': Option<SessionKeys9>;
    'Option<SessionKeys9B>': Option<SessionKeys9B>;
    'Option<SetId>': Option<SetId>;
    'Option<SetIndex>': Option<SetIndex>;
    'Option<SiField>': Option<SiField>;
    'Option<Signature>': Option<Signature>;
    'Option<SignedAvailabilityBitfield>': Option<SignedAvailabilityBitfield>;
    'Option<SignedAvailabilityBitfields>': Option<SignedAvailabilityBitfields>;
    'Option<SignedBlock>': Option<SignedBlock>;
    'Option<SignedBlockWithJustification>': Option<SignedBlockWithJustification>;
    'Option<SignedBlockWithJustifications>': Option<SignedBlockWithJustifications>;
    'Option<SignedSubmission>': Option<SignedSubmission>;
    'Option<SignedSubmissionOf>': Option<SignedSubmissionOf>;
    'Option<SignerPayload>': Option<SignerPayload>;
    'Option<SigningContext>': Option<SigningContext>;
    'Option<SiLookupTypeId>': Option<SiLookupTypeId>;
    'Option<SiPath>': Option<SiPath>;
    'Option<SiType>': Option<SiType>;
    'Option<SiTypeDef>': Option<SiTypeDef>;
    'Option<SiTypeDefArray>': Option<SiTypeDefArray>;
    'Option<SiTypeDefComposite>': Option<SiTypeDefComposite>;
    'Option<SiTypeDefPrimitive>': Option<SiTypeDefPrimitive>;
    'Option<SiTypeDefSequence>': Option<SiTypeDefSequence>;
    'Option<SiTypeDefTuple>': Option<SiTypeDefTuple>;
    'Option<SiTypeDefVariant>': Option<SiTypeDefVariant>;
    'Option<SiVariant>': Option<SiVariant>;
    'Option<SlashingSpans>': Option<SlashingSpans>;
    'Option<SlashingSpansTo204>': Option<SlashingSpansTo204>;
    'Option<SlashJournalEntry>': Option<SlashJournalEntry>;
    'Option<Slot>': Option<Slot>;
    'Option<SlotNumber>': Option<SlotNumber>;
    'Option<SlotRange>': Option<SlotRange>;
    'Option<SocietyJudgement>': Option<SocietyJudgement>;
    'Option<SocietyVote>': Option<SocietyVote>;
    'Option<SolutionOrSnapshotSize>': Option<SolutionOrSnapshotSize>;
    'Option<SolutionSupport>': Option<SolutionSupport>;
    'Option<SolutionSupports>': Option<SolutionSupports>;
    'Option<SpanIndex>': Option<SpanIndex>;
    'Option<SpanRecord>': Option<SpanRecord>;
    'Option<Sr25519Signature>': Option<Sr25519Signature>;
    'Option<StakingLedger>': Option<StakingLedger>;
    'Option<StakingLedgerTo223>': Option<StakingLedgerTo223>;
    'Option<StakingLedgerTo240>': Option<StakingLedgerTo240>;
    'Option<Statement>': Option<Statement>;
    'Option<StatementKind>': Option<StatementKind>;
    'Option<StorageChangeSet>': Option<StorageChangeSet>;
    'Option<StorageData>': Option<StorageData>;
    'Option<StorageEntryMetadataLatest>': Option<StorageEntryMetadataLatest>;
    'Option<StorageEntryMetadataV10>': Option<StorageEntryMetadataV10>;
    'Option<StorageEntryMetadataV11>': Option<StorageEntryMetadataV11>;
    'Option<StorageEntryMetadataV12>': Option<StorageEntryMetadataV12>;
    'Option<StorageEntryMetadataV13>': Option<StorageEntryMetadataV13>;
    'Option<StorageEntryMetadataV9>': Option<StorageEntryMetadataV9>;
    'Option<StorageEntryModifierLatest>': Option<StorageEntryModifierLatest>;
    'Option<StorageEntryModifierV10>': Option<StorageEntryModifierV10>;
    'Option<StorageEntryModifierV11>': Option<StorageEntryModifierV11>;
    'Option<StorageEntryModifierV12>': Option<StorageEntryModifierV12>;
    'Option<StorageEntryModifierV13>': Option<StorageEntryModifierV13>;
    'Option<StorageEntryModifierV9>': Option<StorageEntryModifierV9>;
    'Option<StorageEntryTypeLatest>': Option<StorageEntryTypeLatest>;
    'Option<StorageEntryTypeV10>': Option<StorageEntryTypeV10>;
    'Option<StorageEntryTypeV11>': Option<StorageEntryTypeV11>;
    'Option<StorageEntryTypeV12>': Option<StorageEntryTypeV12>;
    'Option<StorageEntryTypeV13>': Option<StorageEntryTypeV13>;
    'Option<StorageEntryTypeV9>': Option<StorageEntryTypeV9>;
    'Option<StorageHasher>': Option<StorageHasher>;
    'Option<StorageHasherV10>': Option<StorageHasherV10>;
    'Option<StorageHasherV11>': Option<StorageHasherV11>;
    'Option<StorageHasherV12>': Option<StorageHasherV12>;
    'Option<StorageHasherV13>': Option<StorageHasherV13>;
    'Option<StorageHasherV9>': Option<StorageHasherV9>;
    'Option<StorageKey>': Option<StorageKey>;
    'Option<StorageKind>': Option<StorageKind>;
    'Option<StorageMetadataLatest>': Option<StorageMetadataLatest>;
    'Option<StorageMetadataV10>': Option<StorageMetadataV10>;
    'Option<StorageMetadataV11>': Option<StorageMetadataV11>;
    'Option<StorageMetadataV12>': Option<StorageMetadataV12>;
    'Option<StorageMetadataV13>': Option<StorageMetadataV13>;
    'Option<StorageMetadataV9>': Option<StorageMetadataV9>;
    'Option<StorageProof>': Option<StorageProof>;
    'Option<StoredPendingChange>': Option<StoredPendingChange>;
    'Option<StoredState>': Option<StoredState>;
    'Option<StrikeCount>': Option<StrikeCount>;
    'Option<SubId>': Option<SubId>;
    'Option<SubmissionIndicesOf>': Option<SubmissionIndicesOf>;
    'Option<SyncState>': Option<SyncState>;
    'Option<SystemInherentData>': Option<SystemInherentData>;
    'Option<SystemOrigin>': Option<SystemOrigin>;
    'Option<Tally>': Option<Tally>;
    'Option<TaskAddress>': Option<TaskAddress>;
    'Option<TAssetBalance>': Option<TAssetBalance>;
    'Option<TAssetDepositBalance>': Option<TAssetDepositBalance>;
    'Option<Text>': Option<Text>;
    'Option<Timepoint>': Option<Timepoint>;
    'Option<TokenError>': Option<TokenError>;
    'Option<TombstoneContractInfo>': Option<TombstoneContractInfo>;
    'Option<TraceBlockResponse>': Option<TraceBlockResponse>;
    'Option<TraceError>': Option<TraceError>;
    'Option<TransactionInfo>': Option<TransactionInfo>;
    'Option<TransactionPriority>': Option<TransactionPriority>;
    'Option<TransactionStorageProof>': Option<TransactionStorageProof>;
    'Option<TransactionValidityError>': Option<TransactionValidityError>;
    'Option<TransientValidationData>': Option<TransientValidationData>;
    'Option<TreasuryProposal>': Option<TreasuryProposal>;
    'Option<TrieId>': Option<TrieId>;
    'Option<TrieIndex>': Option<TrieIndex>;
    'Option<Type>': Option<Type>;
    'Option<u128>': Option<u128>;
    'Option<U128>': Option<U128>;
    'Option<u16>': Option<u16>;
    'Option<U16>': Option<U16>;
    'Option<u256>': Option<u256>;
    'Option<U256>': Option<U256>;
    'Option<u32>': Option<u32>;
    'Option<U32>': Option<U32>;
    'Option<U32F32>': Option<U32F32>;
    'Option<u64>': Option<u64>;
    'Option<U64>': Option<U64>;
    'Option<u8>': Option<u8>;
    'Option<U8>': Option<U8>;
    'Option<UnappliedSlash>': Option<UnappliedSlash>;
    'Option<UnappliedSlashOther>': Option<UnappliedSlashOther>;
    'Option<UncleEntryItem>': Option<UncleEntryItem>;
    'Option<UnknownTransaction>': Option<UnknownTransaction>;
    'Option<UnlockChunk>': Option<UnlockChunk>;
    'Option<UpwardMessage>': Option<UpwardMessage>;
    'Option<usize>': Option<usize>;
    'Option<USize>': Option<USize>;
    'Option<ValidationCode>': Option<ValidationCode>;
    'Option<ValidationCodeHash>': Option<ValidationCodeHash>;
    'Option<ValidationData>': Option<ValidationData>;
    'Option<ValidationDataType>': Option<ValidationDataType>;
    'Option<ValidationFunctionParams>': Option<ValidationFunctionParams>;
    'Option<ValidatorCount>': Option<ValidatorCount>;
    'Option<ValidatorId>': Option<ValidatorId>;
    'Option<ValidatorIdOf>': Option<ValidatorIdOf>;
    'Option<ValidatorIndex>': Option<ValidatorIndex>;
    'Option<ValidatorIndexCompact>': Option<ValidatorIndexCompact>;
    'Option<ValidatorPrefs>': Option<ValidatorPrefs>;
    'Option<ValidatorPrefsTo145>': Option<ValidatorPrefsTo145>;
    'Option<ValidatorPrefsTo196>': Option<ValidatorPrefsTo196>;
    'Option<ValidatorPrefsWithBlocked>': Option<ValidatorPrefsWithBlocked>;
    'Option<ValidatorPrefsWithCommission>': Option<ValidatorPrefsWithCommission>;
    'Option<ValidatorSetId>': Option<ValidatorSetId>;
    'Option<ValidatorSignature>': Option<ValidatorSignature>;
    'Option<ValidDisputeStatementKind>': Option<ValidDisputeStatementKind>;
    'Option<ValidityAttestation>': Option<ValidityAttestation>;
    'Option<VecInboundHrmpMessage>': Option<VecInboundHrmpMessage>;
    'Option<VersionedMultiAsset>': Option<VersionedMultiAsset>;
    'Option<VersionedMultiLocation>': Option<VersionedMultiLocation>;
    'Option<VersionedXcm>': Option<VersionedXcm>;
    'Option<VestingInfo>': Option<VestingInfo>;
    'Option<VestingSchedule>': Option<VestingSchedule>;
    'Option<Vote>': Option<Vote>;
    'Option<VoteIndex>': Option<VoteIndex>;
    'Option<Voter>': Option<Voter>;
    'Option<VoterInfo>': Option<VoterInfo>;
    'Option<Votes>': Option<Votes>;
    'Option<VotesTo230>': Option<VotesTo230>;
    'Option<VoteThreshold>': Option<VoteThreshold>;
    'Option<VoteWeight>': Option<VoteWeight>;
    'Option<Voting>': Option<Voting>;
    'Option<VotingDelegating>': Option<VotingDelegating>;
    'Option<VotingDirect>': Option<VotingDirect>;
    'Option<VotingDirectVote>': Option<VotingDirectVote>;
    'Option<VouchingStatus>': Option<VouchingStatus>;
    'Option<VrfData>': Option<VrfData>;
    'Option<VrfOutput>': Option<VrfOutput>;
    'Option<VrfProof>': Option<VrfProof>;
    'Option<Weight>': Option<Weight>;
    'Option<WeightMultiplier>': Option<WeightMultiplier>;
    'Option<WeightPerClass>': Option<WeightPerClass>;
    'Option<WeightToFeeCoefficient>': Option<WeightToFeeCoefficient>;
    'Option<WinnersData>': Option<WinnersData>;
    'Option<WinnersDataTuple>': Option<WinnersDataTuple>;
    'Option<WinningData>': Option<WinningData>;
    'Option<WinningDataEntry>': Option<WinningDataEntry>;
    'Option<WithdrawReasons>': Option<WithdrawReasons>;
    'Option<Xcm>': Option<Xcm>;
    'Option<XcmAssetEffects>': Option<XcmAssetEffects>;
    'Option<XcmError>': Option<XcmError>;
    'Option<XcmHrmpChannelAccepted>': Option<XcmHrmpChannelAccepted>;
    'Option<XcmHrmpChannelClosing>': Option<XcmHrmpChannelClosing>;
    'Option<XcmHrmpNewChannelOpenRequest>': Option<XcmHrmpNewChannelOpenRequest>;
    'Option<XcmOrder>': Option<XcmOrder>;
    'Option<XcmOrderBuyExecution>': Option<XcmOrderBuyExecution>;
    'Option<XcmOrderDepositAsset>': Option<XcmOrderDepositAsset>;
    'Option<XcmOrderDepositReserveAsset>': Option<XcmOrderDepositReserveAsset>;
    'Option<XcmOrderExchangeAsset>': Option<XcmOrderExchangeAsset>;
    'Option<XcmOrderInitiateReserveWithdraw>': Option<XcmOrderInitiateReserveWithdraw>;
    'Option<XcmOrderInitiateTeleport>': Option<XcmOrderInitiateTeleport>;
    'Option<XcmOrderQueryHolding>': Option<XcmOrderQueryHolding>;
    'Option<XcmOrigin>': Option<XcmOrigin>;
    'Option<XcmOriginKind>': Option<XcmOriginKind>;
    'Option<XcmpMessageFormat>': Option<XcmpMessageFormat>;
    'Option<XcmQueryResponse>': Option<XcmQueryResponse>;
    'Option<XcmRelayedFrom>': Option<XcmRelayedFrom>;
    'Option<XcmReserveAssetDeposit>': Option<XcmReserveAssetDeposit>;
    'Option<XcmResponse>': Option<XcmResponse>;
    'Option<XcmTeleportAsset>': Option<XcmTeleportAsset>;
    'Option<XcmTransact>': Option<XcmTransact>;
    'Option<XcmTransferAsset>': Option<XcmTransferAsset>;
    'Option<XcmTransferReserveAsset>': Option<XcmTransferReserveAsset>;
    'Option<XcmWithdrawAsset>': Option<XcmWithdrawAsset>;
    'Vec<AbridgedCandidateReceipt>': Vec<AbridgedCandidateReceipt>;
    'Vec<AbridgedHostConfiguration>': Vec<AbridgedHostConfiguration>;
    'Vec<AbridgedHrmpChannel>': Vec<AbridgedHrmpChannel>;
    'Vec<AccountData>': Vec<AccountData>;
    'Vec<AccountId>': Vec<AccountId>;
    'Vec<AccountId32Junction>': Vec<AccountId32Junction>;
    'Vec<AccountIdOf>': Vec<AccountIdOf>;
    'Vec<AccountIndex>': Vec<AccountIndex>;
    'Vec<AccountIndex64Junction>': Vec<AccountIndex64Junction>;
    'Vec<AccountInfo>': Vec<AccountInfo>;
    'Vec<AccountInfoWithDualRefCount>': Vec<AccountInfoWithDualRefCount>;
    'Vec<AccountInfoWithProviders>': Vec<AccountInfoWithProviders>;
    'Vec<AccountInfoWithRefCount>': Vec<AccountInfoWithRefCount>;
    'Vec<AccountInfoWithRefCountU8>': Vec<AccountInfoWithRefCountU8>;
    'Vec<AccountInfoWithTripleRefCount>': Vec<AccountInfoWithTripleRefCount>;
    'Vec<AccountKey20Junction>': Vec<AccountKey20Junction>;
    'Vec<AccountStatus>': Vec<AccountStatus>;
    'Vec<AccountValidity>': Vec<AccountValidity>;
    'Vec<AccountVote>': Vec<AccountVote>;
    'Vec<AccountVoteSplit>': Vec<AccountVoteSplit>;
    'Vec<AccountVoteStandard>': Vec<AccountVoteStandard>;
    'Vec<ActiveEraInfo>': Vec<ActiveEraInfo>;
    'Vec<ActiveGilt>': Vec<ActiveGilt>;
    'Vec<ActiveGiltsTotal>': Vec<ActiveGiltsTotal>;
    'Vec<ActiveIndex>': Vec<ActiveIndex>;
    'Vec<ActiveRecovery>': Vec<ActiveRecovery>;
    'Vec<Address>': Vec<Address>;
    'Vec<AliveContractInfo>': Vec<AliveContractInfo>;
    'Vec<AllowedSlots>': Vec<AllowedSlots>;
    'Vec<AnySignature>': Vec<AnySignature>;
    'Vec<ApiId>': Vec<ApiId>;
    'Vec<ApplyExtrinsicResult>': Vec<ApplyExtrinsicResult>;
    'Vec<ApprovalFlag>': Vec<ApprovalFlag>;
    'Vec<Approvals>': Vec<Approvals>;
    'Vec<ArithmeticError>': Vec<ArithmeticError>;
    'Vec<AssetApproval>': Vec<AssetApproval>;
    'Vec<AssetApprovalKey>': Vec<AssetApprovalKey>;
    'Vec<AssetBalance>': Vec<AssetBalance>;
    'Vec<AssetDestroyWitness>': Vec<AssetDestroyWitness>;
    'Vec<AssetDetails>': Vec<AssetDetails>;
    'Vec<AssetId>': Vec<AssetId>;
    'Vec<AssetInstance>': Vec<AssetInstance>;
    'Vec<AssetMetadata>': Vec<AssetMetadata>;
    'Vec<AssetOptions>': Vec<AssetOptions>;
    'Vec<AssignmentId>': Vec<AssignmentId>;
    'Vec<AssignmentKind>': Vec<AssignmentKind>;
    'Vec<AttestedCandidate>': Vec<AttestedCandidate>;
    'Vec<AuctionIndex>': Vec<AuctionIndex>;
    'Vec<AuthIndex>': Vec<AuthIndex>;
    'Vec<AuthorityDiscoveryId>': Vec<AuthorityDiscoveryId>;
    'Vec<AuthorityId>': Vec<AuthorityId>;
    'Vec<AuthorityIndex>': Vec<AuthorityIndex>;
    'Vec<AuthorityList>': Vec<AuthorityList>;
    'Vec<AuthoritySet>': Vec<AuthoritySet>;
    'Vec<AuthoritySetChange>': Vec<AuthoritySetChange>;
    'Vec<AuthoritySetChanges>': Vec<AuthoritySetChanges>;
    'Vec<AuthoritySignature>': Vec<AuthoritySignature>;
    'Vec<AuthorityWeight>': Vec<AuthorityWeight>;
    'Vec<AvailabilityBitfield>': Vec<AvailabilityBitfield>;
    'Vec<AvailabilityBitfieldRecord>': Vec<AvailabilityBitfieldRecord>;
    'Vec<BabeAuthorityWeight>': Vec<BabeAuthorityWeight>;
    'Vec<BabeBlockWeight>': Vec<BabeBlockWeight>;
    'Vec<BabeEpochConfiguration>': Vec<BabeEpochConfiguration>;
    'Vec<BabeEquivocationProof>': Vec<BabeEquivocationProof>;
    'Vec<BabeWeight>': Vec<BabeWeight>;
    'Vec<BackedCandidate>': Vec<BackedCandidate>;
    'Vec<Balance>': Vec<Balance>;
    'Vec<BalanceLock>': Vec<BalanceLock>;
    'Vec<BalanceLockTo212>': Vec<BalanceLockTo212>;
    'Vec<BalanceOf>': Vec<BalanceOf>;
    'Vec<BalanceStatus>': Vec<BalanceStatus>;
    'Vec<BeefyCommitment>': Vec<BeefyCommitment>;
    'Vec<BeefyId>': Vec<BeefyId>;
    'Vec<BeefyKey>': Vec<BeefyKey>;
    'Vec<BeefyNextAuthoritySet>': Vec<BeefyNextAuthoritySet>;
    'Vec<BeefyPayload>': Vec<BeefyPayload>;
    'Vec<BeefySignedCommitment>': Vec<BeefySignedCommitment>;
    'Vec<Bid>': Vec<Bid>;
    'Vec<Bidder>': Vec<Bidder>;
    'Vec<BidKind>': Vec<BidKind>;
    'Vec<BitVec>': Vec<BitVec>;
    'Vec<Block>': Vec<Block>;
    'Vec<BlockAttestations>': Vec<BlockAttestations>;
    'Vec<BlockHash>': Vec<BlockHash>;
    'Vec<BlockLength>': Vec<BlockLength>;
    'Vec<BlockNumber>': Vec<BlockNumber>;
    'Vec<BlockTrace>': Vec<BlockTrace>;
    'Vec<BlockTraceEvent>': Vec<BlockTraceEvent>;
    'Vec<BlockTraceEventData>': Vec<BlockTraceEventData>;
    'Vec<BlockTraceSpan>': Vec<BlockTraceSpan>;
    'Vec<BlockWeights>': Vec<BlockWeights>;
    'Vec<BodyId>': Vec<BodyId>;
    'Vec<BodyPart>': Vec<BodyPart>;
    'Vec<BodyPartAtLeastProportion>': Vec<BodyPartAtLeastProportion>;
    'Vec<BodyPartFraction>': Vec<BodyPartFraction>;
    'Vec<BodyPartMoreThanProportion>': Vec<BodyPartMoreThanProportion>;
    'Vec<bool>': Vec<bool>;
    'Vec<Bool>': Vec<Bool>;
    'Vec<Bounty>': Vec<Bounty>;
    'Vec<BountyIndex>': Vec<BountyIndex>;
    'Vec<BountyStatus>': Vec<BountyStatus>;
    'Vec<BountyStatusActive>': Vec<BountyStatusActive>;
    'Vec<BountyStatusCuratorProposed>': Vec<BountyStatusCuratorProposed>;
    'Vec<BountyStatusPendingPayout>': Vec<BountyStatusPendingPayout>;
    'Vec<BridgedBlockHash>': Vec<BridgedBlockHash>;
    'Vec<BridgedBlockNumber>': Vec<BridgedBlockNumber>;
    'Vec<BridgedHeader>': Vec<BridgedHeader>;
    'Vec<BufferedSessionChange>': Vec<BufferedSessionChange>;
    'Vec<Bytes>': Vec<Bytes>;
    'Vec<Call>': Vec<Call>;
    'Vec<CallHash>': Vec<CallHash>;
    'Vec<CallHashOf>': Vec<CallHashOf>;
    'Vec<CallIndex>': Vec<CallIndex>;
    'Vec<CandidateCommitments>': Vec<CandidateCommitments>;
    'Vec<CandidateDescriptor>': Vec<CandidateDescriptor>;
    'Vec<CandidateHash>': Vec<CandidateHash>;
    'Vec<CandidateInfo>': Vec<CandidateInfo>;
    'Vec<CandidatePendingAvailability>': Vec<CandidatePendingAvailability>;
    'Vec<CandidateReceipt>': Vec<CandidateReceipt>;
    'Vec<ChainProperties>': Vec<ChainProperties>;
    'Vec<ChainType>': Vec<ChainType>;
    'Vec<ChangesTrieConfiguration>': Vec<ChangesTrieConfiguration>;
    'Vec<ChangesTrieSignal>': Vec<ChangesTrieSignal>;
    'Vec<ClassDetails>': Vec<ClassDetails>;
    'Vec<ClassId>': Vec<ClassId>;
    'Vec<ClassMetadata>': Vec<ClassMetadata>;
    'Vec<CodecHash>': Vec<CodecHash>;
    'Vec<CodeHash>': Vec<CodeHash>;
    'Vec<CollatorId>': Vec<CollatorId>;
    'Vec<CollatorSignature>': Vec<CollatorSignature>;
    'Vec<CollectiveOrigin>': Vec<CollectiveOrigin>;
    'Vec<CommittedCandidateReceipt>': Vec<CommittedCandidateReceipt>;
    'Vec<CompactAssignments>': Vec<CompactAssignments>;
    'Vec<CompactAssignmentsTo257>': Vec<CompactAssignmentsTo257>;
    'Vec<CompactAssignmentsTo265>': Vec<CompactAssignmentsTo265>;
    'Vec<CompactAssignmentsWith16>': Vec<CompactAssignmentsWith16>;
    'Vec<CompactAssignmentsWith24>': Vec<CompactAssignmentsWith24>;
    'Vec<CompactScore>': Vec<CompactScore>;
    'Vec<CompactScoreCompact>': Vec<CompactScoreCompact>;
    'Vec<ConfigData>': Vec<ConfigData>;
    'Vec<Consensus>': Vec<Consensus>;
    'Vec<ConsensusEngineId>': Vec<ConsensusEngineId>;
    'Vec<ConsumedWeight>': Vec<ConsumedWeight>;
    'Vec<ContractCallRequest>': Vec<ContractCallRequest>;
    'Vec<ContractConstructorSpec>': Vec<ContractConstructorSpec>;
    'Vec<ContractContractSpec>': Vec<ContractContractSpec>;
    'Vec<ContractCryptoHasher>': Vec<ContractCryptoHasher>;
    'Vec<ContractDiscriminant>': Vec<ContractDiscriminant>;
    'Vec<ContractDisplayName>': Vec<ContractDisplayName>;
    'Vec<ContractEventParamSpec>': Vec<ContractEventParamSpec>;
    'Vec<ContractEventSpec>': Vec<ContractEventSpec>;
    'Vec<ContractExecResult>': Vec<ContractExecResult>;
    'Vec<ContractExecResultErr>': Vec<ContractExecResultErr>;
    'Vec<ContractExecResultErrModule>': Vec<ContractExecResultErrModule>;
    'Vec<ContractExecResultOk>': Vec<ContractExecResultOk>;
    'Vec<ContractExecResultResult>': Vec<ContractExecResultResult>;
    'Vec<ContractExecResultSuccessTo255>': Vec<ContractExecResultSuccessTo255>;
    'Vec<ContractExecResultSuccessTo260>': Vec<ContractExecResultSuccessTo260>;
    'Vec<ContractExecResultTo255>': Vec<ContractExecResultTo255>;
    'Vec<ContractExecResultTo260>': Vec<ContractExecResultTo260>;
    'Vec<ContractInfo>': Vec<ContractInfo>;
    'Vec<ContractInstantiateResult>': Vec<ContractInstantiateResult>;
    'Vec<ContractLayoutArray>': Vec<ContractLayoutArray>;
    'Vec<ContractLayoutCell>': Vec<ContractLayoutCell>;
    'Vec<ContractLayoutEnum>': Vec<ContractLayoutEnum>;
    'Vec<ContractLayoutHash>': Vec<ContractLayoutHash>;
    'Vec<ContractLayoutHashingStrategy>': Vec<ContractLayoutHashingStrategy>;
    'Vec<ContractLayoutKey>': Vec<ContractLayoutKey>;
    'Vec<ContractLayoutStruct>': Vec<ContractLayoutStruct>;
    'Vec<ContractLayoutStructField>': Vec<ContractLayoutStructField>;
    'Vec<ContractMessageParamSpec>': Vec<ContractMessageParamSpec>;
    'Vec<ContractMessageSpec>': Vec<ContractMessageSpec>;
    'Vec<ContractProject>': Vec<ContractProject>;
    'Vec<ContractProjectContract>': Vec<ContractProjectContract>;
    'Vec<ContractProjectSource>': Vec<ContractProjectSource>;
    'Vec<ContractSelector>': Vec<ContractSelector>;
    'Vec<ContractStorageKey>': Vec<ContractStorageKey>;
    'Vec<ContractStorageLayout>': Vec<ContractStorageLayout>;
    'Vec<ContractTypeSpec>': Vec<ContractTypeSpec>;
    'Vec<Conviction>': Vec<Conviction>;
    'Vec<CoreAssignment>': Vec<CoreAssignment>;
    'Vec<CoreIndex>': Vec<CoreIndex>;
    'Vec<CoreOccupied>': Vec<CoreOccupied>;
    'Vec<CreatedBlock>': Vec<CreatedBlock>;
    'Vec<Data>': Vec<Data>;
    'Vec<DeferredOffenceOf>': Vec<DeferredOffenceOf>;
    'Vec<DefunctVoter>': Vec<DefunctVoter>;
    'Vec<DelayKind>': Vec<DelayKind>;
    'Vec<DelayKindBest>': Vec<DelayKindBest>;
    'Vec<Delegations>': Vec<Delegations>;
    'Vec<DeletedContract>': Vec<DeletedContract>;
    'Vec<DepositBalance>': Vec<DepositBalance>;
    'Vec<DepositBalanceOf>': Vec<DepositBalanceOf>;
    'Vec<DestroyWitness>': Vec<DestroyWitness>;
    'Vec<Digest>': Vec<Digest>;
    'Vec<DigestItem>': Vec<DigestItem>;
    'Vec<DigestOf>': Vec<DigestOf>;
    'Vec<DispatchClass>': Vec<DispatchClass>;
    'Vec<DispatchError>': Vec<DispatchError>;
    'Vec<DispatchErrorModule>': Vec<DispatchErrorModule>;
    'Vec<DispatchErrorTo198>': Vec<DispatchErrorTo198>;
    'Vec<DispatchInfo>': Vec<DispatchInfo>;
    'Vec<DispatchInfoTo190>': Vec<DispatchInfoTo190>;
    'Vec<DispatchInfoTo244>': Vec<DispatchInfoTo244>;
    'Vec<DispatchOutcome>': Vec<DispatchOutcome>;
    'Vec<DispatchResult>': Vec<DispatchResult>;
    'Vec<DispatchResultOf>': Vec<DispatchResultOf>;
    'Vec<DispatchResultTo198>': Vec<DispatchResultTo198>;
    'Vec<DisputeStatement>': Vec<DisputeStatement>;
    'Vec<DisputeStatementSet>': Vec<DisputeStatementSet>;
    'Vec<DoubleEncodedCall>': Vec<DoubleEncodedCall>;
    'Vec<DoubleVoteReport>': Vec<DoubleVoteReport>;
    'Vec<DownwardMessage>': Vec<DownwardMessage>;
    'Vec<EcdsaSignature>': Vec<EcdsaSignature>;
    'Vec<Ed25519Signature>': Vec<Ed25519Signature>;
    'Vec<ElectionCompute>': Vec<ElectionCompute>;
    'Vec<ElectionPhase>': Vec<ElectionPhase>;
    'Vec<ElectionResult>': Vec<ElectionResult>;
    'Vec<ElectionScore>': Vec<ElectionScore>;
    'Vec<ElectionSize>': Vec<ElectionSize>;
    'Vec<ElectionStatus>': Vec<ElectionStatus>;
    'Vec<EncodedFinalityProofs>': Vec<EncodedFinalityProofs>;
    'Vec<EncodedJustification>': Vec<EncodedJustification>;
    'Vec<EpochAuthorship>': Vec<EpochAuthorship>;
    'Vec<EraIndex>': Vec<EraIndex>;
    'Vec<EraPoints>': Vec<EraPoints>;
    'Vec<EraRewardPoints>': Vec<EraRewardPoints>;
    'Vec<EraRewards>': Vec<EraRewards>;
    'Vec<ErrorMetadataLatest>': Vec<ErrorMetadataLatest>;
    'Vec<ErrorMetadataV10>': Vec<ErrorMetadataV10>;
    'Vec<ErrorMetadataV11>': Vec<ErrorMetadataV11>;
    'Vec<ErrorMetadataV12>': Vec<ErrorMetadataV12>;
    'Vec<ErrorMetadataV13>': Vec<ErrorMetadataV13>;
    'Vec<ErrorMetadataV9>': Vec<ErrorMetadataV9>;
    'Vec<EthAccount>': Vec<EthAccount>;
    'Vec<EthBlock>': Vec<EthBlock>;
    'Vec<EthBloom>': Vec<EthBloom>;
    'Vec<EthCallRequest>': Vec<EthCallRequest>;
    'Vec<EthereumAccountId>': Vec<EthereumAccountId>;
    'Vec<EthereumAddress>': Vec<EthereumAddress>;
    'Vec<EthereumLookupSource>': Vec<EthereumLookupSource>;
    'Vec<EthereumSignature>': Vec<EthereumSignature>;
    'Vec<EthFilter>': Vec<EthFilter>;
    'Vec<EthFilterAddress>': Vec<EthFilterAddress>;
    'Vec<EthFilterChanges>': Vec<EthFilterChanges>;
    'Vec<EthFilterTopic>': Vec<EthFilterTopic>;
    'Vec<EthFilterTopicEntry>': Vec<EthFilterTopicEntry>;
    'Vec<EthFilterTopicInner>': Vec<EthFilterTopicInner>;
    'Vec<EthHeader>': Vec<EthHeader>;
    'Vec<EthLog>': Vec<EthLog>;
    'Vec<EthReceipt>': Vec<EthReceipt>;
    'Vec<EthRichBlock>': Vec<EthRichBlock>;
    'Vec<EthRichHeader>': Vec<EthRichHeader>;
    'Vec<EthStorageProof>': Vec<EthStorageProof>;
    'Vec<EthSubKind>': Vec<EthSubKind>;
    'Vec<EthSubParams>': Vec<EthSubParams>;
    'Vec<EthSubResult>': Vec<EthSubResult>;
    'Vec<EthSyncInfo>': Vec<EthSyncInfo>;
    'Vec<EthSyncStatus>': Vec<EthSyncStatus>;
    'Vec<EthTransaction>': Vec<EthTransaction>;
    'Vec<EthTransactionAction>': Vec<EthTransactionAction>;
    'Vec<EthTransactionCondition>': Vec<EthTransactionCondition>;
    'Vec<EthTransactionRequest>': Vec<EthTransactionRequest>;
    'Vec<EthTransactionSignature>': Vec<EthTransactionSignature>;
    'Vec<EthTransactionStatus>': Vec<EthTransactionStatus>;
    'Vec<EthWork>': Vec<EthWork>;
    'Vec<Event>': Vec<Event>;
    'Vec<EventId>': Vec<EventId>;
    'Vec<EventIndex>': Vec<EventIndex>;
    'Vec<EventMetadataLatest>': Vec<EventMetadataLatest>;
    'Vec<EventMetadataV10>': Vec<EventMetadataV10>;
    'Vec<EventMetadataV11>': Vec<EventMetadataV11>;
    'Vec<EventMetadataV12>': Vec<EventMetadataV12>;
    'Vec<EventMetadataV13>': Vec<EventMetadataV13>;
    'Vec<EventMetadataV9>': Vec<EventMetadataV9>;
    'Vec<EventRecord>': Vec<EventRecord>;
    'Vec<EvmAccount>': Vec<EvmAccount>;
    'Vec<EvmLog>': Vec<EvmLog>;
    'Vec<EvmVicinity>': Vec<EvmVicinity>;
    'Vec<ExecReturnValue>': Vec<ExecReturnValue>;
    'Vec<ExitError>': Vec<ExitError>;
    'Vec<ExitFatal>': Vec<ExitFatal>;
    'Vec<ExitReason>': Vec<ExitReason>;
    'Vec<ExitRevert>': Vec<ExitRevert>;
    'Vec<ExitSucceed>': Vec<ExitSucceed>;
    'Vec<ExplicitDisputeStatement>': Vec<ExplicitDisputeStatement>;
    'Vec<Exposure>': Vec<Exposure>;
    'Vec<ExtendedBalance>': Vec<ExtendedBalance>;
    'Vec<Extrinsic>': Vec<Extrinsic>;
    'Vec<ExtrinsicEra>': Vec<ExtrinsicEra>;
    'Vec<ExtrinsicMetadataLatest>': Vec<ExtrinsicMetadataLatest>;
    'Vec<ExtrinsicMetadataV11>': Vec<ExtrinsicMetadataV11>;
    'Vec<ExtrinsicMetadataV12>': Vec<ExtrinsicMetadataV12>;
    'Vec<ExtrinsicMetadataV13>': Vec<ExtrinsicMetadataV13>;
    'Vec<ExtrinsicOrHash>': Vec<ExtrinsicOrHash>;
    'Vec<ExtrinsicPayload>': Vec<ExtrinsicPayload>;
    'Vec<ExtrinsicPayloadUnknown>': Vec<ExtrinsicPayloadUnknown>;
    'Vec<ExtrinsicPayloadV4>': Vec<ExtrinsicPayloadV4>;
    'Vec<ExtrinsicSignature>': Vec<ExtrinsicSignature>;
    'Vec<ExtrinsicSignatureV4>': Vec<ExtrinsicSignatureV4>;
    'Vec<ExtrinsicStatus>': Vec<ExtrinsicStatus>;
    'Vec<ExtrinsicsWeight>': Vec<ExtrinsicsWeight>;
    'Vec<ExtrinsicUnknown>': Vec<ExtrinsicUnknown>;
    'Vec<ExtrinsicV4>': Vec<ExtrinsicV4>;
    'Vec<FeeDetails>': Vec<FeeDetails>;
    'Vec<Fixed128>': Vec<Fixed128>;
    'Vec<Fixed64>': Vec<Fixed64>;
    'Vec<FixedI128>': Vec<FixedI128>;
    'Vec<FixedI64>': Vec<FixedI64>;
    'Vec<FixedU128>': Vec<FixedU128>;
    'Vec<FixedU64>': Vec<FixedU64>;
    'Vec<Forcing>': Vec<Forcing>;
    'Vec<ForkTreePendingChange>': Vec<ForkTreePendingChange>;
    'Vec<ForkTreePendingChangeNode>': Vec<ForkTreePendingChangeNode>;
    'Vec<FullIdentification>': Vec<FullIdentification>;
    'Vec<FunctionArgumentMetadataLatest>': Vec<FunctionArgumentMetadataLatest>;
    'Vec<FunctionArgumentMetadataV10>': Vec<FunctionArgumentMetadataV10>;
    'Vec<FunctionArgumentMetadataV11>': Vec<FunctionArgumentMetadataV11>;
    'Vec<FunctionArgumentMetadataV12>': Vec<FunctionArgumentMetadataV12>;
    'Vec<FunctionArgumentMetadataV13>': Vec<FunctionArgumentMetadataV13>;
    'Vec<FunctionArgumentMetadataV9>': Vec<FunctionArgumentMetadataV9>;
    'Vec<FunctionMetadataLatest>': Vec<FunctionMetadataLatest>;
    'Vec<FunctionMetadataV10>': Vec<FunctionMetadataV10>;
    'Vec<FunctionMetadataV11>': Vec<FunctionMetadataV11>;
    'Vec<FunctionMetadataV12>': Vec<FunctionMetadataV12>;
    'Vec<FunctionMetadataV13>': Vec<FunctionMetadataV13>;
    'Vec<FunctionMetadataV9>': Vec<FunctionMetadataV9>;
    'Vec<FundIndex>': Vec<FundIndex>;
    'Vec<FundInfo>': Vec<FundInfo>;
    'Vec<Gas>': Vec<Gas>;
    'Vec<GiltBid>': Vec<GiltBid>;
    'Vec<GlobalValidationData>': Vec<GlobalValidationData>;
    'Vec<GlobalValidationSchedule>': Vec<GlobalValidationSchedule>;
    'Vec<GrandpaCommit>': Vec<GrandpaCommit>;
    'Vec<GrandpaEquivocation>': Vec<GrandpaEquivocation>;
    'Vec<GrandpaEquivocationProof>': Vec<GrandpaEquivocationProof>;
    'Vec<GrandpaEquivocationValue>': Vec<GrandpaEquivocationValue>;
    'Vec<GrandpaJustification>': Vec<GrandpaJustification>;
    'Vec<GrandpaPrecommit>': Vec<GrandpaPrecommit>;
    'Vec<GrandpaPrevote>': Vec<GrandpaPrevote>;
    'Vec<GrandpaSignedPrecommit>': Vec<GrandpaSignedPrecommit>;
    'Vec<GroupIndex>': Vec<GroupIndex>;
    'Vec<H1024>': Vec<H1024>;
    'Vec<H128>': Vec<H128>;
    'Vec<H160>': Vec<H160>;
    'Vec<H2048>': Vec<H2048>;
    'Vec<H256>': Vec<H256>;
    'Vec<H32>': Vec<H32>;
    'Vec<H512>': Vec<H512>;
    'Vec<H64>': Vec<H64>;
    'Vec<Hash>': Vec<Hash>;
    'Vec<HeadData>': Vec<HeadData>;
    'Vec<Header>': Vec<Header>;
    'Vec<HeaderPartial>': Vec<HeaderPartial>;
    'Vec<Health>': Vec<Health>;
    'Vec<Heartbeat>': Vec<Heartbeat>;
    'Vec<HeartbeatTo244>': Vec<HeartbeatTo244>;
    'Vec<HostConfiguration>': Vec<HostConfiguration>;
    'Vec<HostFnWeights>': Vec<HostFnWeights>;
    'Vec<HostFnWeightsTo264>': Vec<HostFnWeightsTo264>;
    'Vec<HrmpChannel>': Vec<HrmpChannel>;
    'Vec<HrmpChannelId>': Vec<HrmpChannelId>;
    'Vec<HrmpOpenChannelRequest>': Vec<HrmpOpenChannelRequest>;
    'Vec<i128>': Vec<i128>;
    'Vec<I128>': Vec<I128>;
    'Vec<i16>': Vec<i16>;
    'Vec<I16>': Vec<I16>;
    'Vec<i256>': Vec<i256>;
    'Vec<I256>': Vec<I256>;
    'Vec<i32>': Vec<i32>;
    'Vec<I32>': Vec<I32>;
    'Vec<I32F32>': Vec<I32F32>;
    'Vec<i64>': Vec<i64>;
    'Vec<I64>': Vec<I64>;
    'Vec<i8>': Vec<i8>;
    'Vec<I8>': Vec<I8>;
    'Vec<IdentificationTuple>': Vec<IdentificationTuple>;
    'Vec<IdentityFields>': Vec<IdentityFields>;
    'Vec<IdentityInfo>': Vec<IdentityInfo>;
    'Vec<IdentityInfoAdditional>': Vec<IdentityInfoAdditional>;
    'Vec<IdentityJudgement>': Vec<IdentityJudgement>;
    'Vec<ImmortalEra>': Vec<ImmortalEra>;
    'Vec<ImportedAux>': Vec<ImportedAux>;
    'Vec<InboundDownwardMessage>': Vec<InboundDownwardMessage>;
    'Vec<InboundHrmpMessage>': Vec<InboundHrmpMessage>;
    'Vec<InboundHrmpMessages>': Vec<InboundHrmpMessages>;
    'Vec<InboundStatus>': Vec<InboundStatus>;
    'Vec<IncludedBlocks>': Vec<IncludedBlocks>;
    'Vec<InclusionFee>': Vec<InclusionFee>;
    'Vec<IncomingParachain>': Vec<IncomingParachain>;
    'Vec<IncomingParachainDeploy>': Vec<IncomingParachainDeploy>;
    'Vec<IncomingParachainFixed>': Vec<IncomingParachainFixed>;
    'Vec<Index>': Vec<Index>;
    'Vec<IndicesLookupSource>': Vec<IndicesLookupSource>;
    'Vec<IndividualExposure>': Vec<IndividualExposure>;
    'Vec<InitializationData>': Vec<InitializationData>;
    'Vec<InstanceDetails>': Vec<InstanceDetails>;
    'Vec<InstanceId>': Vec<InstanceId>;
    'Vec<InstanceMetadata>': Vec<InstanceMetadata>;
    'Vec<InstantiateRequest>': Vec<InstantiateRequest>;
    'Vec<InstantiateReturnValue>': Vec<InstantiateReturnValue>;
    'Vec<InstructionWeights>': Vec<InstructionWeights>;
    'Vec<InvalidDisputeStatementKind>': Vec<InvalidDisputeStatementKind>;
    'Vec<InvalidTransaction>': Vec<InvalidTransaction>;
    'Vec<Json>': Vec<Json>;
    'Vec<Junction>': Vec<Junction>;
    'Vec<Justification>': Vec<Justification>;
    'Vec<JustificationNotification>': Vec<JustificationNotification>;
    'Vec<Justifications>': Vec<Justifications>;
    'Vec<Key>': Vec<Key>;
    'Vec<KeyOwnerProof>': Vec<KeyOwnerProof>;
    'Vec<Keys>': Vec<Keys>;
    'Vec<KeyType>': Vec<KeyType>;
    'Vec<KeyTypeId>': Vec<KeyTypeId>;
    'Vec<KeyValue>': Vec<KeyValue>;
    'Vec<KeyValueOption>': Vec<KeyValueOption>;
    'Vec<Kind>': Vec<Kind>;
    'Vec<LastContribution>': Vec<LastContribution>;
    'Vec<LastRuntimeUpgradeInfo>': Vec<LastRuntimeUpgradeInfo>;
    'Vec<LeasePeriod>': Vec<LeasePeriod>;
    'Vec<LeasePeriodOf>': Vec<LeasePeriodOf>;
    'Vec<Limits>': Vec<Limits>;
    'Vec<LimitsTo264>': Vec<LimitsTo264>;
    'Vec<LocalValidationData>': Vec<LocalValidationData>;
    'Vec<LockIdentifier>': Vec<LockIdentifier>;
    'Vec<LookupSource>': Vec<LookupSource>;
    'Vec<LookupTarget>': Vec<LookupTarget>;
    'Vec<LotteryConfig>': Vec<LotteryConfig>;
    'Vec<MaybeRandomness>': Vec<MaybeRandomness>;
    'Vec<MaybeVrf>': Vec<MaybeVrf>;
    'Vec<MemberCount>': Vec<MemberCount>;
    'Vec<MembershipProof>': Vec<MembershipProof>;
    'Vec<Message>': Vec<Message>;
    'Vec<MessageError>': Vec<MessageError>;
    'Vec<MessageId>': Vec<MessageId>;
    'Vec<MessageIngestionType>': Vec<MessageIngestionType>;
    'Vec<MessageQueueChain>': Vec<MessageQueueChain>;
    'Vec<MessagingStateSnapshot>': Vec<MessagingStateSnapshot>;
    'Vec<MessagingStateSnapshotEgressEntry>': Vec<MessagingStateSnapshotEgressEntry>;
    'Vec<MetadataAll>': Vec<MetadataAll>;
    'Vec<MetadataLatest>': Vec<MetadataLatest>;
    'Vec<MetadataV10>': Vec<MetadataV10>;
    'Vec<MetadataV11>': Vec<MetadataV11>;
    'Vec<MetadataV12>': Vec<MetadataV12>;
    'Vec<MetadataV13>': Vec<MetadataV13>;
    'Vec<MetadataV9>': Vec<MetadataV9>;
    'Vec<MmrLeafProof>': Vec<MmrLeafProof>;
    'Vec<MmrRootHash>': Vec<MmrRootHash>;
    'Vec<ModuleConstantMetadataLatest>': Vec<ModuleConstantMetadataLatest>;
    'Vec<ModuleConstantMetadataV10>': Vec<ModuleConstantMetadataV10>;
    'Vec<ModuleConstantMetadataV11>': Vec<ModuleConstantMetadataV11>;
    'Vec<ModuleConstantMetadataV12>': Vec<ModuleConstantMetadataV12>;
    'Vec<ModuleConstantMetadataV13>': Vec<ModuleConstantMetadataV13>;
    'Vec<ModuleConstantMetadataV9>': Vec<ModuleConstantMetadataV9>;
    'Vec<ModuleId>': Vec<ModuleId>;
    'Vec<ModuleMetadataLatest>': Vec<ModuleMetadataLatest>;
    'Vec<ModuleMetadataV10>': Vec<ModuleMetadataV10>;
    'Vec<ModuleMetadataV11>': Vec<ModuleMetadataV11>;
    'Vec<ModuleMetadataV12>': Vec<ModuleMetadataV12>;
    'Vec<ModuleMetadataV13>': Vec<ModuleMetadataV13>;
    'Vec<ModuleMetadataV9>': Vec<ModuleMetadataV9>;
    'Vec<Moment>': Vec<Moment>;
    'Vec<MomentOf>': Vec<MomentOf>;
    'Vec<MoreAttestations>': Vec<MoreAttestations>;
    'Vec<MortalEra>': Vec<MortalEra>;
    'Vec<MultiAddress>': Vec<MultiAddress>;
    'Vec<MultiAsset>': Vec<MultiAsset>;
    'Vec<MultiAssetAbstractFungible>': Vec<MultiAssetAbstractFungible>;
    'Vec<MultiAssetAbstractNonFungible>': Vec<MultiAssetAbstractNonFungible>;
    'Vec<MultiAssetConcreteFungible>': Vec<MultiAssetConcreteFungible>;
    'Vec<MultiAssetConcreteNonFungible>': Vec<MultiAssetConcreteNonFungible>;
    'Vec<MultiDisputeStatementSet>': Vec<MultiDisputeStatementSet>;
    'Vec<MultiLocation>': Vec<MultiLocation>;
    'Vec<Multiplier>': Vec<Multiplier>;
    'Vec<Multisig>': Vec<Multisig>;
    'Vec<MultiSignature>': Vec<MultiSignature>;
    'Vec<MultiSigner>': Vec<MultiSigner>;
    'Vec<NetworkId>': Vec<NetworkId>;
    'Vec<NetworkState>': Vec<NetworkState>;
    'Vec<NetworkStatePeerset>': Vec<NetworkStatePeerset>;
    'Vec<NetworkStatePeersetInfo>': Vec<NetworkStatePeersetInfo>;
    'Vec<NewBidder>': Vec<NewBidder>;
    'Vec<NextAuthority>': Vec<NextAuthority>;
    'Vec<NextConfigDescriptor>': Vec<NextConfigDescriptor>;
    'Vec<NextConfigDescriptorV1>': Vec<NextConfigDescriptorV1>;
    'Vec<Node>': Vec<Node>;
    'Vec<NodeRole>': Vec<NodeRole>;
    'Vec<Nominations>': Vec<Nominations>;
    'Vec<NominatorIndex>': Vec<NominatorIndex>;
    'Vec<NominatorIndexCompact>': Vec<NominatorIndexCompact>;
    'Vec<NotConnectedPeer>': Vec<NotConnectedPeer>;
    'Vec<Null>': Vec<Null>;
    'Vec<OffchainAccuracy>': Vec<OffchainAccuracy>;
    'Vec<OffchainAccuracyCompact>': Vec<OffchainAccuracyCompact>;
    'Vec<OffenceDetails>': Vec<OffenceDetails>;
    'Vec<Offender>': Vec<Offender>;
    'Vec<OpaqueCall>': Vec<OpaqueCall>;
    'Vec<OpaqueMultiaddr>': Vec<OpaqueMultiaddr>;
    'Vec<OpaqueNetworkState>': Vec<OpaqueNetworkState>;
    'Vec<OpaquePeerId>': Vec<OpaquePeerId>;
    'Vec<OpaqueTimeSlot>': Vec<OpaqueTimeSlot>;
    'Vec<OpenTip>': Vec<OpenTip>;
    'Vec<OpenTipFinderTo225>': Vec<OpenTipFinderTo225>;
    'Vec<OpenTipTip>': Vec<OpenTipTip>;
    'Vec<OpenTipTo225>': Vec<OpenTipTo225>;
    'Vec<Origin>': Vec<Origin>;
    'Vec<OriginCaller>': Vec<OriginCaller>;
    'Vec<OutboundHrmpMessage>': Vec<OutboundHrmpMessage>;
    'Vec<OutboundStatus>': Vec<OutboundStatus>;
    'Vec<Outcome>': Vec<Outcome>;
    'Vec<OverweightIndex>': Vec<OverweightIndex>;
    'Vec<Owner>': Vec<Owner>;
    'Vec<PageCounter>': Vec<PageCounter>;
    'Vec<PageIndexData>': Vec<PageIndexData>;
    'Vec<PalletId>': Vec<PalletId>;
    'Vec<PalletsOrigin>': Vec<PalletsOrigin>;
    'Vec<PalletVersion>': Vec<PalletVersion>;
    'Vec<ParachainDispatchOrigin>': Vec<ParachainDispatchOrigin>;
    'Vec<ParachainInherentData>': Vec<ParachainInherentData>;
    'Vec<ParachainProposal>': Vec<ParachainProposal>;
    'Vec<ParachainsInherentData>': Vec<ParachainsInherentData>;
    'Vec<ParaGenesisArgs>': Vec<ParaGenesisArgs>;
    'Vec<ParaId>': Vec<ParaId>;
    'Vec<ParaInfo>': Vec<ParaInfo>;
    'Vec<ParaLifecycle>': Vec<ParaLifecycle>;
    'Vec<ParaPastCodeMeta>': Vec<ParaPastCodeMeta>;
    'Vec<ParaScheduling>': Vec<ParaScheduling>;
    'Vec<ParathreadClaim>': Vec<ParathreadClaim>;
    'Vec<ParathreadClaimQueue>': Vec<ParathreadClaimQueue>;
    'Vec<ParathreadEntry>': Vec<ParathreadEntry>;
    'Vec<ParaValidatorIndex>': Vec<ParaValidatorIndex>;
    'Vec<Pays>': Vec<Pays>;
    'Vec<Peer>': Vec<Peer>;
    'Vec<PeerEndpoint>': Vec<PeerEndpoint>;
    'Vec<PeerEndpointAddr>': Vec<PeerEndpointAddr>;
    'Vec<PeerInfo>': Vec<PeerInfo>;
    'Vec<PeerPing>': Vec<PeerPing>;
    'Vec<PendingChange>': Vec<PendingChange>;
    'Vec<PendingPause>': Vec<PendingPause>;
    'Vec<PendingResume>': Vec<PendingResume>;
    'Vec<Perbill>': Vec<Perbill>;
    'Vec<Percent>': Vec<Percent>;
    'Vec<PerDispatchClassU32>': Vec<PerDispatchClassU32>;
    'Vec<PerDispatchClassWeight>': Vec<PerDispatchClassWeight>;
    'Vec<PerDispatchClassWeightsPerClass>': Vec<PerDispatchClassWeightsPerClass>;
    'Vec<Period>': Vec<Period>;
    'Vec<Permill>': Vec<Permill>;
    'Vec<PermissionLatest>': Vec<PermissionLatest>;
    'Vec<PermissionsV1>': Vec<PermissionsV1>;
    'Vec<PermissionVersions>': Vec<PermissionVersions>;
    'Vec<Perquintill>': Vec<Perquintill>;
    'Vec<PersistedValidationData>': Vec<PersistedValidationData>;
    'Vec<PerU16>': Vec<PerU16>;
    'Vec<Phantom>': Vec<Phantom>;
    'Vec<PhantomData>': Vec<PhantomData>;
    'Vec<Phase>': Vec<Phase>;
    'Vec<PhragmenScore>': Vec<PhragmenScore>;
    'Vec<PluralityJunction>': Vec<PluralityJunction>;
    'Vec<Points>': Vec<Points>;
    'Vec<Precommits>': Vec<Precommits>;
    'Vec<PrefabWasmModule>': Vec<PrefabWasmModule>;
    'Vec<PrefixedStorageKey>': Vec<PrefixedStorageKey>;
    'Vec<PreimageStatus>': Vec<PreimageStatus>;
    'Vec<PreimageStatusAvailable>': Vec<PreimageStatusAvailable>;
    'Vec<PreRuntime>': Vec<PreRuntime>;
    'Vec<Prevotes>': Vec<Prevotes>;
    'Vec<Priority>': Vec<Priority>;
    'Vec<PriorLock>': Vec<PriorLock>;
    'Vec<PropIndex>': Vec<PropIndex>;
    'Vec<Proposal>': Vec<Proposal>;
    'Vec<ProposalIndex>': Vec<ProposalIndex>;
    'Vec<ProxyAnnouncement>': Vec<ProxyAnnouncement>;
    'Vec<ProxyDefinition>': Vec<ProxyDefinition>;
    'Vec<ProxyState>': Vec<ProxyState>;
    'Vec<ProxyType>': Vec<ProxyType>;
    'Vec<QueueConfigData>': Vec<QueueConfigData>;
    'Vec<QueuedParathread>': Vec<QueuedParathread>;
    'Vec<Randomness>': Vec<Randomness>;
    'Vec<Raw>': Vec<Raw>;
    'Vec<RawAuraPreDigest>': Vec<RawAuraPreDigest>;
    'Vec<RawBabePreDigest>': Vec<RawBabePreDigest>;
    'Vec<RawBabePreDigestCompat>': Vec<RawBabePreDigestCompat>;
    'Vec<RawBabePreDigestPrimary>': Vec<RawBabePreDigestPrimary>;
    'Vec<RawBabePreDigestPrimaryTo159>': Vec<RawBabePreDigestPrimaryTo159>;
    'Vec<RawBabePreDigestSecondaryPlain>': Vec<RawBabePreDigestSecondaryPlain>;
    'Vec<RawBabePreDigestSecondaryTo159>': Vec<RawBabePreDigestSecondaryTo159>;
    'Vec<RawBabePreDigestSecondaryVRF>': Vec<RawBabePreDigestSecondaryVRF>;
    'Vec<RawBabePreDigestTo159>': Vec<RawBabePreDigestTo159>;
    'Vec<RawOrigin>': Vec<RawOrigin>;
    'Vec<RawSolution>': Vec<RawSolution>;
    'Vec<RawSolutionTo265>': Vec<RawSolutionTo265>;
    'Vec<RawSolutionWith16>': Vec<RawSolutionWith16>;
    'Vec<RawSolutionWith24>': Vec<RawSolutionWith24>;
    'Vec<RawVRFOutput>': Vec<RawVRFOutput>;
    'Vec<ReadProof>': Vec<ReadProof>;
    'Vec<ReadySolution>': Vec<ReadySolution>;
    'Vec<Reasons>': Vec<Reasons>;
    'Vec<RecoveryConfig>': Vec<RecoveryConfig>;
    'Vec<RefCount>': Vec<RefCount>;
    'Vec<RefCountTo259>': Vec<RefCountTo259>;
    'Vec<ReferendumIndex>': Vec<ReferendumIndex>;
    'Vec<ReferendumInfo>': Vec<ReferendumInfo>;
    'Vec<ReferendumInfoFinished>': Vec<ReferendumInfoFinished>;
    'Vec<ReferendumInfoTo239>': Vec<ReferendumInfoTo239>;
    'Vec<ReferendumStatus>': Vec<ReferendumStatus>;
    'Vec<RegisteredParachainInfo>': Vec<RegisteredParachainInfo>;
    'Vec<RegistrarIndex>': Vec<RegistrarIndex>;
    'Vec<RegistrarInfo>': Vec<RegistrarInfo>;
    'Vec<Registration>': Vec<Registration>;
    'Vec<RegistrationJudgement>': Vec<RegistrationJudgement>;
    'Vec<RelayBlockNumber>': Vec<RelayBlockNumber>;
    'Vec<RelayChainBlockNumber>': Vec<RelayChainBlockNumber>;
    'Vec<RelayChainHash>': Vec<RelayChainHash>;
    'Vec<RelayHash>': Vec<RelayHash>;
    'Vec<Releases>': Vec<Releases>;
    'Vec<Remark>': Vec<Remark>;
    'Vec<Renouncing>': Vec<Renouncing>;
    'Vec<RentProjection>': Vec<RentProjection>;
    'Vec<ReportedRoundStates>': Vec<ReportedRoundStates>;
    'Vec<Reporter>': Vec<Reporter>;
    'Vec<ReportIdOf>': Vec<ReportIdOf>;
    'Vec<ReserveData>': Vec<ReserveData>;
    'Vec<ReserveIdentifier>': Vec<ReserveIdentifier>;
    'Vec<Retriable>': Vec<Retriable>;
    'Vec<RewardDestination>': Vec<RewardDestination>;
    'Vec<RewardPoint>': Vec<RewardPoint>;
    'Vec<RoundSnapshot>': Vec<RoundSnapshot>;
    'Vec<RoundState>': Vec<RoundState>;
    'Vec<RpcMethods>': Vec<RpcMethods>;
    'Vec<RuntimeDbWeight>': Vec<RuntimeDbWeight>;
    'Vec<RuntimeDispatchInfo>': Vec<RuntimeDispatchInfo>;
    'Vec<RuntimeVersion>': Vec<RuntimeVersion>;
    'Vec<RuntimeVersionApi>': Vec<RuntimeVersionApi>;
    'Vec<RuntimeVersionPartial>': Vec<RuntimeVersionPartial>;
    'Vec<Schedule>': Vec<Schedule>;
    'Vec<Scheduled>': Vec<Scheduled>;
    'Vec<ScheduledTo254>': Vec<ScheduledTo254>;
    'Vec<SchedulePeriod>': Vec<SchedulePeriod>;
    'Vec<SchedulePriority>': Vec<SchedulePriority>;
    'Vec<ScheduleTo212>': Vec<ScheduleTo212>;
    'Vec<ScheduleTo258>': Vec<ScheduleTo258>;
    'Vec<ScheduleTo264>': Vec<ScheduleTo264>;
    'Vec<Scheduling>': Vec<Scheduling>;
    'Vec<Seal>': Vec<Seal>;
    'Vec<SealV0>': Vec<SealV0>;
    'Vec<SeatHolder>': Vec<SeatHolder>;
    'Vec<SeedOf>': Vec<SeedOf>;
    'Vec<ServiceQuality>': Vec<ServiceQuality>;
    'Vec<SessionIndex>': Vec<SessionIndex>;
    'Vec<SessionInfo>': Vec<SessionInfo>;
    'Vec<SessionInfoValidatorGroup>': Vec<SessionInfoValidatorGroup>;
    'Vec<SessionKeys1>': Vec<SessionKeys1>;
    'Vec<SessionKeys10>': Vec<SessionKeys10>;
    'Vec<SessionKeys10B>': Vec<SessionKeys10B>;
    'Vec<SessionKeys2>': Vec<SessionKeys2>;
    'Vec<SessionKeys3>': Vec<SessionKeys3>;
    'Vec<SessionKeys4>': Vec<SessionKeys4>;
    'Vec<SessionKeys5>': Vec<SessionKeys5>;
    'Vec<SessionKeys6>': Vec<SessionKeys6>;
    'Vec<SessionKeys6B>': Vec<SessionKeys6B>;
    'Vec<SessionKeys7>': Vec<SessionKeys7>;
    'Vec<SessionKeys7B>': Vec<SessionKeys7B>;
    'Vec<SessionKeys8>': Vec<SessionKeys8>;
    'Vec<SessionKeys8B>': Vec<SessionKeys8B>;
    'Vec<SessionKeys9>': Vec<SessionKeys9>;
    'Vec<SessionKeys9B>': Vec<SessionKeys9B>;
    'Vec<SetId>': Vec<SetId>;
    'Vec<SetIndex>': Vec<SetIndex>;
    'Vec<SiField>': Vec<SiField>;
    'Vec<Signature>': Vec<Signature>;
    'Vec<SignedAvailabilityBitfield>': Vec<SignedAvailabilityBitfield>;
    'Vec<SignedAvailabilityBitfields>': Vec<SignedAvailabilityBitfields>;
    'Vec<SignedBlock>': Vec<SignedBlock>;
    'Vec<SignedBlockWithJustification>': Vec<SignedBlockWithJustification>;
    'Vec<SignedBlockWithJustifications>': Vec<SignedBlockWithJustifications>;
    'Vec<SignedSubmission>': Vec<SignedSubmission>;
    'Vec<SignedSubmissionOf>': Vec<SignedSubmissionOf>;
    'Vec<SignerPayload>': Vec<SignerPayload>;
    'Vec<SigningContext>': Vec<SigningContext>;
    'Vec<SiLookupTypeId>': Vec<SiLookupTypeId>;
    'Vec<SiPath>': Vec<SiPath>;
    'Vec<SiType>': Vec<SiType>;
    'Vec<SiTypeDef>': Vec<SiTypeDef>;
    'Vec<SiTypeDefArray>': Vec<SiTypeDefArray>;
    'Vec<SiTypeDefComposite>': Vec<SiTypeDefComposite>;
    'Vec<SiTypeDefPrimitive>': Vec<SiTypeDefPrimitive>;
    'Vec<SiTypeDefSequence>': Vec<SiTypeDefSequence>;
    'Vec<SiTypeDefTuple>': Vec<SiTypeDefTuple>;
    'Vec<SiTypeDefVariant>': Vec<SiTypeDefVariant>;
    'Vec<SiVariant>': Vec<SiVariant>;
    'Vec<SlashingSpans>': Vec<SlashingSpans>;
    'Vec<SlashingSpansTo204>': Vec<SlashingSpansTo204>;
    'Vec<SlashJournalEntry>': Vec<SlashJournalEntry>;
    'Vec<Slot>': Vec<Slot>;
    'Vec<SlotNumber>': Vec<SlotNumber>;
    'Vec<SlotRange>': Vec<SlotRange>;
    'Vec<SocietyJudgement>': Vec<SocietyJudgement>;
    'Vec<SocietyVote>': Vec<SocietyVote>;
    'Vec<SolutionOrSnapshotSize>': Vec<SolutionOrSnapshotSize>;
    'Vec<SolutionSupport>': Vec<SolutionSupport>;
    'Vec<SolutionSupports>': Vec<SolutionSupports>;
    'Vec<SpanIndex>': Vec<SpanIndex>;
    'Vec<SpanRecord>': Vec<SpanRecord>;
    'Vec<Sr25519Signature>': Vec<Sr25519Signature>;
    'Vec<StakingLedger>': Vec<StakingLedger>;
    'Vec<StakingLedgerTo223>': Vec<StakingLedgerTo223>;
    'Vec<StakingLedgerTo240>': Vec<StakingLedgerTo240>;
    'Vec<Statement>': Vec<Statement>;
    'Vec<StatementKind>': Vec<StatementKind>;
    'Vec<StorageChangeSet>': Vec<StorageChangeSet>;
    'Vec<StorageData>': Vec<StorageData>;
    'Vec<StorageEntryMetadataLatest>': Vec<StorageEntryMetadataLatest>;
    'Vec<StorageEntryMetadataV10>': Vec<StorageEntryMetadataV10>;
    'Vec<StorageEntryMetadataV11>': Vec<StorageEntryMetadataV11>;
    'Vec<StorageEntryMetadataV12>': Vec<StorageEntryMetadataV12>;
    'Vec<StorageEntryMetadataV13>': Vec<StorageEntryMetadataV13>;
    'Vec<StorageEntryMetadataV9>': Vec<StorageEntryMetadataV9>;
    'Vec<StorageEntryModifierLatest>': Vec<StorageEntryModifierLatest>;
    'Vec<StorageEntryModifierV10>': Vec<StorageEntryModifierV10>;
    'Vec<StorageEntryModifierV11>': Vec<StorageEntryModifierV11>;
    'Vec<StorageEntryModifierV12>': Vec<StorageEntryModifierV12>;
    'Vec<StorageEntryModifierV13>': Vec<StorageEntryModifierV13>;
    'Vec<StorageEntryModifierV9>': Vec<StorageEntryModifierV9>;
    'Vec<StorageEntryTypeLatest>': Vec<StorageEntryTypeLatest>;
    'Vec<StorageEntryTypeV10>': Vec<StorageEntryTypeV10>;
    'Vec<StorageEntryTypeV11>': Vec<StorageEntryTypeV11>;
    'Vec<StorageEntryTypeV12>': Vec<StorageEntryTypeV12>;
    'Vec<StorageEntryTypeV13>': Vec<StorageEntryTypeV13>;
    'Vec<StorageEntryTypeV9>': Vec<StorageEntryTypeV9>;
    'Vec<StorageHasher>': Vec<StorageHasher>;
    'Vec<StorageHasherV10>': Vec<StorageHasherV10>;
    'Vec<StorageHasherV11>': Vec<StorageHasherV11>;
    'Vec<StorageHasherV12>': Vec<StorageHasherV12>;
    'Vec<StorageHasherV13>': Vec<StorageHasherV13>;
    'Vec<StorageHasherV9>': Vec<StorageHasherV9>;
    'Vec<StorageKey>': Vec<StorageKey>;
    'Vec<StorageKind>': Vec<StorageKind>;
    'Vec<StorageMetadataLatest>': Vec<StorageMetadataLatest>;
    'Vec<StorageMetadataV10>': Vec<StorageMetadataV10>;
    'Vec<StorageMetadataV11>': Vec<StorageMetadataV11>;
    'Vec<StorageMetadataV12>': Vec<StorageMetadataV12>;
    'Vec<StorageMetadataV13>': Vec<StorageMetadataV13>;
    'Vec<StorageMetadataV9>': Vec<StorageMetadataV9>;
    'Vec<StorageProof>': Vec<StorageProof>;
    'Vec<StoredPendingChange>': Vec<StoredPendingChange>;
    'Vec<StoredState>': Vec<StoredState>;
    'Vec<StrikeCount>': Vec<StrikeCount>;
    'Vec<SubId>': Vec<SubId>;
    'Vec<SubmissionIndicesOf>': Vec<SubmissionIndicesOf>;
    'Vec<SyncState>': Vec<SyncState>;
    'Vec<SystemInherentData>': Vec<SystemInherentData>;
    'Vec<SystemOrigin>': Vec<SystemOrigin>;
    'Vec<Tally>': Vec<Tally>;
    'Vec<TaskAddress>': Vec<TaskAddress>;
    'Vec<TAssetBalance>': Vec<TAssetBalance>;
    'Vec<TAssetDepositBalance>': Vec<TAssetDepositBalance>;
    'Vec<Text>': Vec<Text>;
    'Vec<Timepoint>': Vec<Timepoint>;
    'Vec<TokenError>': Vec<TokenError>;
    'Vec<TombstoneContractInfo>': Vec<TombstoneContractInfo>;
    'Vec<TraceBlockResponse>': Vec<TraceBlockResponse>;
    'Vec<TraceError>': Vec<TraceError>;
    'Vec<TransactionInfo>': Vec<TransactionInfo>;
    'Vec<TransactionPriority>': Vec<TransactionPriority>;
    'Vec<TransactionStorageProof>': Vec<TransactionStorageProof>;
    'Vec<TransactionValidityError>': Vec<TransactionValidityError>;
    'Vec<TransientValidationData>': Vec<TransientValidationData>;
    'Vec<TreasuryProposal>': Vec<TreasuryProposal>;
    'Vec<TrieId>': Vec<TrieId>;
    'Vec<TrieIndex>': Vec<TrieIndex>;
    'Vec<Type>': Vec<Type>;
    'Vec<u128>': Vec<u128>;
    'Vec<U128>': Vec<U128>;
    'Vec<u16>': Vec<u16>;
    'Vec<U16>': Vec<U16>;
    'Vec<u256>': Vec<u256>;
    'Vec<U256>': Vec<U256>;
    'Vec<u32>': Vec<u32>;
    'Vec<U32>': Vec<U32>;
    'Vec<U32F32>': Vec<U32F32>;
    'Vec<u64>': Vec<u64>;
    'Vec<U64>': Vec<U64>;
    'Vec<u8>': Vec<u8>;
    'Vec<U8>': Vec<U8>;
    'Vec<UnappliedSlash>': Vec<UnappliedSlash>;
    'Vec<UnappliedSlashOther>': Vec<UnappliedSlashOther>;
    'Vec<UncleEntryItem>': Vec<UncleEntryItem>;
    'Vec<UnknownTransaction>': Vec<UnknownTransaction>;
    'Vec<UnlockChunk>': Vec<UnlockChunk>;
    'Vec<UpwardMessage>': Vec<UpwardMessage>;
    'Vec<usize>': Vec<usize>;
    'Vec<USize>': Vec<USize>;
    'Vec<ValidationCode>': Vec<ValidationCode>;
    'Vec<ValidationCodeHash>': Vec<ValidationCodeHash>;
    'Vec<ValidationData>': Vec<ValidationData>;
    'Vec<ValidationDataType>': Vec<ValidationDataType>;
    'Vec<ValidationFunctionParams>': Vec<ValidationFunctionParams>;
    'Vec<ValidatorCount>': Vec<ValidatorCount>;
    'Vec<ValidatorId>': Vec<ValidatorId>;
    'Vec<ValidatorIdOf>': Vec<ValidatorIdOf>;
    'Vec<ValidatorIndex>': Vec<ValidatorIndex>;
    'Vec<ValidatorIndexCompact>': Vec<ValidatorIndexCompact>;
    'Vec<ValidatorPrefs>': Vec<ValidatorPrefs>;
    'Vec<ValidatorPrefsTo145>': Vec<ValidatorPrefsTo145>;
    'Vec<ValidatorPrefsTo196>': Vec<ValidatorPrefsTo196>;
    'Vec<ValidatorPrefsWithBlocked>': Vec<ValidatorPrefsWithBlocked>;
    'Vec<ValidatorPrefsWithCommission>': Vec<ValidatorPrefsWithCommission>;
    'Vec<ValidatorSetId>': Vec<ValidatorSetId>;
    'Vec<ValidatorSignature>': Vec<ValidatorSignature>;
    'Vec<ValidDisputeStatementKind>': Vec<ValidDisputeStatementKind>;
    'Vec<ValidityAttestation>': Vec<ValidityAttestation>;
    'Vec<VecInboundHrmpMessage>': Vec<VecInboundHrmpMessage>;
    'Vec<VersionedMultiAsset>': Vec<VersionedMultiAsset>;
    'Vec<VersionedMultiLocation>': Vec<VersionedMultiLocation>;
    'Vec<VersionedXcm>': Vec<VersionedXcm>;
    'Vec<VestingInfo>': Vec<VestingInfo>;
    'Vec<VestingSchedule>': Vec<VestingSchedule>;
    'Vec<Vote>': Vec<Vote>;
    'Vec<VoteIndex>': Vec<VoteIndex>;
    'Vec<Voter>': Vec<Voter>;
    'Vec<VoterInfo>': Vec<VoterInfo>;
    'Vec<Votes>': Vec<Votes>;
    'Vec<VotesTo230>': Vec<VotesTo230>;
    'Vec<VoteThreshold>': Vec<VoteThreshold>;
    'Vec<VoteWeight>': Vec<VoteWeight>;
    'Vec<Voting>': Vec<Voting>;
    'Vec<VotingDelegating>': Vec<VotingDelegating>;
    'Vec<VotingDirect>': Vec<VotingDirect>;
    'Vec<VotingDirectVote>': Vec<VotingDirectVote>;
    'Vec<VouchingStatus>': Vec<VouchingStatus>;
    'Vec<VrfData>': Vec<VrfData>;
    'Vec<VrfOutput>': Vec<VrfOutput>;
    'Vec<VrfProof>': Vec<VrfProof>;
    'Vec<Weight>': Vec<Weight>;
    'Vec<WeightMultiplier>': Vec<WeightMultiplier>;
    'Vec<WeightPerClass>': Vec<WeightPerClass>;
    'Vec<WeightToFeeCoefficient>': Vec<WeightToFeeCoefficient>;
    'Vec<WinnersData>': Vec<WinnersData>;
    'Vec<WinnersDataTuple>': Vec<WinnersDataTuple>;
    'Vec<WinningData>': Vec<WinningData>;
    'Vec<WinningDataEntry>': Vec<WinningDataEntry>;
    'Vec<WithdrawReasons>': Vec<WithdrawReasons>;
    'Vec<Xcm>': Vec<Xcm>;
    'Vec<XcmAssetEffects>': Vec<XcmAssetEffects>;
    'Vec<XcmError>': Vec<XcmError>;
    'Vec<XcmHrmpChannelAccepted>': Vec<XcmHrmpChannelAccepted>;
    'Vec<XcmHrmpChannelClosing>': Vec<XcmHrmpChannelClosing>;
    'Vec<XcmHrmpNewChannelOpenRequest>': Vec<XcmHrmpNewChannelOpenRequest>;
    'Vec<XcmOrder>': Vec<XcmOrder>;
    'Vec<XcmOrderBuyExecution>': Vec<XcmOrderBuyExecution>;
    'Vec<XcmOrderDepositAsset>': Vec<XcmOrderDepositAsset>;
    'Vec<XcmOrderDepositReserveAsset>': Vec<XcmOrderDepositReserveAsset>;
    'Vec<XcmOrderExchangeAsset>': Vec<XcmOrderExchangeAsset>;
    'Vec<XcmOrderInitiateReserveWithdraw>': Vec<XcmOrderInitiateReserveWithdraw>;
    'Vec<XcmOrderInitiateTeleport>': Vec<XcmOrderInitiateTeleport>;
    'Vec<XcmOrderQueryHolding>': Vec<XcmOrderQueryHolding>;
    'Vec<XcmOrigin>': Vec<XcmOrigin>;
    'Vec<XcmOriginKind>': Vec<XcmOriginKind>;
    'Vec<XcmpMessageFormat>': Vec<XcmpMessageFormat>;
    'Vec<XcmQueryResponse>': Vec<XcmQueryResponse>;
    'Vec<XcmRelayedFrom>': Vec<XcmRelayedFrom>;
    'Vec<XcmReserveAssetDeposit>': Vec<XcmReserveAssetDeposit>;
    'Vec<XcmResponse>': Vec<XcmResponse>;
    'Vec<XcmTeleportAsset>': Vec<XcmTeleportAsset>;
    'Vec<XcmTransact>': Vec<XcmTransact>;
    'Vec<XcmTransferAsset>': Vec<XcmTransferAsset>;
    'Vec<XcmTransferReserveAsset>': Vec<XcmTransferReserveAsset>;
    'Vec<XcmWithdrawAsset>': Vec<XcmWithdrawAsset>;
    AbridgedCandidateReceipt: AbridgedCandidateReceipt;
    AbridgedHostConfiguration: AbridgedHostConfiguration;
    AbridgedHrmpChannel: AbridgedHrmpChannel;
    AccountData: AccountData;
    AccountId: AccountId;
    AccountId32Junction: AccountId32Junction;
    AccountIdOf: AccountIdOf;
    AccountIndex: AccountIndex;
    AccountIndex64Junction: AccountIndex64Junction;
    AccountInfo: AccountInfo;
    AccountInfoWithDualRefCount: AccountInfoWithDualRefCount;
    AccountInfoWithProviders: AccountInfoWithProviders;
    AccountInfoWithRefCount: AccountInfoWithRefCount;
    AccountInfoWithRefCountU8: AccountInfoWithRefCountU8;
    AccountInfoWithTripleRefCount: AccountInfoWithTripleRefCount;
    AccountKey20Junction: AccountKey20Junction;
    AccountStatus: AccountStatus;
    AccountValidity: AccountValidity;
    AccountVote: AccountVote;
    AccountVoteSplit: AccountVoteSplit;
    AccountVoteStandard: AccountVoteStandard;
    ActiveEraInfo: ActiveEraInfo;
    ActiveGilt: ActiveGilt;
    ActiveGiltsTotal: ActiveGiltsTotal;
    ActiveIndex: ActiveIndex;
    ActiveRecovery: ActiveRecovery;
    Address: Address;
    AliveContractInfo: AliveContractInfo;
    AllowedSlots: AllowedSlots;
    AnySignature: AnySignature;
    ApiId: ApiId;
    ApplyExtrinsicResult: ApplyExtrinsicResult;
    ApprovalFlag: ApprovalFlag;
    Approvals: Approvals;
    ArithmeticError: ArithmeticError;
    AssetApproval: AssetApproval;
    AssetApprovalKey: AssetApprovalKey;
    AssetBalance: AssetBalance;
    AssetDestroyWitness: AssetDestroyWitness;
    AssetDetails: AssetDetails;
    AssetId: AssetId;
    AssetInstance: AssetInstance;
    AssetMetadata: AssetMetadata;
    AssetOptions: AssetOptions;
    AssignmentId: AssignmentId;
    AssignmentKind: AssignmentKind;
    AttestedCandidate: AttestedCandidate;
    AuctionIndex: AuctionIndex;
    AuthIndex: AuthIndex;
    AuthorityDiscoveryId: AuthorityDiscoveryId;
    AuthorityId: AuthorityId;
    AuthorityIndex: AuthorityIndex;
    AuthorityList: AuthorityList;
    AuthoritySet: AuthoritySet;
    AuthoritySetChange: AuthoritySetChange;
    AuthoritySetChanges: AuthoritySetChanges;
    AuthoritySignature: AuthoritySignature;
    AuthorityWeight: AuthorityWeight;
    AvailabilityBitfield: AvailabilityBitfield;
    AvailabilityBitfieldRecord: AvailabilityBitfieldRecord;
    BabeAuthorityWeight: BabeAuthorityWeight;
    BabeBlockWeight: BabeBlockWeight;
    BabeEpochConfiguration: BabeEpochConfiguration;
    BabeEquivocationProof: BabeEquivocationProof;
    BabeWeight: BabeWeight;
    BackedCandidate: BackedCandidate;
    Balance: Balance;
    BalanceLock: BalanceLock;
    BalanceLockTo212: BalanceLockTo212;
    BalanceOf: BalanceOf;
    BalanceStatus: BalanceStatus;
    BeefyCommitment: BeefyCommitment;
    BeefyId: BeefyId;
    BeefyKey: BeefyKey;
    BeefyNextAuthoritySet: BeefyNextAuthoritySet;
    BeefyPayload: BeefyPayload;
    BeefySignedCommitment: BeefySignedCommitment;
    Bid: Bid;
    Bidder: Bidder;
    BidKind: BidKind;
    BitVec: BitVec;
    Block: Block;
    BlockAttestations: BlockAttestations;
    BlockHash: BlockHash;
    BlockLength: BlockLength;
    BlockNumber: BlockNumber;
    BlockTrace: BlockTrace;
    BlockTraceEvent: BlockTraceEvent;
    BlockTraceEventData: BlockTraceEventData;
    BlockTraceSpan: BlockTraceSpan;
    BlockWeights: BlockWeights;
    BodyId: BodyId;
    BodyPart: BodyPart;
    BodyPartAtLeastProportion: BodyPartAtLeastProportion;
    BodyPartFraction: BodyPartFraction;
    BodyPartMoreThanProportion: BodyPartMoreThanProportion;
    bool: bool;
    Bool: Bool;
    Bounty: Bounty;
    BountyIndex: BountyIndex;
    BountyStatus: BountyStatus;
    BountyStatusActive: BountyStatusActive;
    BountyStatusCuratorProposed: BountyStatusCuratorProposed;
    BountyStatusPendingPayout: BountyStatusPendingPayout;
    BridgedBlockHash: BridgedBlockHash;
    BridgedBlockNumber: BridgedBlockNumber;
    BridgedHeader: BridgedHeader;
    BufferedSessionChange: BufferedSessionChange;
    Bytes: Bytes;
    Call: Call;
    CallHash: CallHash;
    CallHashOf: CallHashOf;
    CallIndex: CallIndex;
    CandidateCommitments: CandidateCommitments;
    CandidateDescriptor: CandidateDescriptor;
    CandidateHash: CandidateHash;
    CandidateInfo: CandidateInfo;
    CandidatePendingAvailability: CandidatePendingAvailability;
    CandidateReceipt: CandidateReceipt;
    ChainProperties: ChainProperties;
    ChainType: ChainType;
    ChangesTrieConfiguration: ChangesTrieConfiguration;
    ChangesTrieSignal: ChangesTrieSignal;
    ClassDetails: ClassDetails;
    ClassId: ClassId;
    ClassMetadata: ClassMetadata;
    CodecHash: CodecHash;
    CodeHash: CodeHash;
    CollatorId: CollatorId;
    CollatorSignature: CollatorSignature;
    CollectiveOrigin: CollectiveOrigin;
    CommittedCandidateReceipt: CommittedCandidateReceipt;
    CompactAssignments: CompactAssignments;
    CompactAssignmentsTo257: CompactAssignmentsTo257;
    CompactAssignmentsTo265: CompactAssignmentsTo265;
    CompactAssignmentsWith16: CompactAssignmentsWith16;
    CompactAssignmentsWith24: CompactAssignmentsWith24;
    CompactScore: CompactScore;
    CompactScoreCompact: CompactScoreCompact;
    ConfigData: ConfigData;
    Consensus: Consensus;
    ConsensusEngineId: ConsensusEngineId;
    ConsumedWeight: ConsumedWeight;
    ContractCallRequest: ContractCallRequest;
    ContractConstructorSpec: ContractConstructorSpec;
    ContractContractSpec: ContractContractSpec;
    ContractCryptoHasher: ContractCryptoHasher;
    ContractDiscriminant: ContractDiscriminant;
    ContractDisplayName: ContractDisplayName;
    ContractEventParamSpec: ContractEventParamSpec;
    ContractEventSpec: ContractEventSpec;
    ContractExecResult: ContractExecResult;
    ContractExecResultErr: ContractExecResultErr;
    ContractExecResultErrModule: ContractExecResultErrModule;
    ContractExecResultOk: ContractExecResultOk;
    ContractExecResultResult: ContractExecResultResult;
    ContractExecResultSuccessTo255: ContractExecResultSuccessTo255;
    ContractExecResultSuccessTo260: ContractExecResultSuccessTo260;
    ContractExecResultTo255: ContractExecResultTo255;
    ContractExecResultTo260: ContractExecResultTo260;
    ContractInfo: ContractInfo;
    ContractInstantiateResult: ContractInstantiateResult;
    ContractLayoutArray: ContractLayoutArray;
    ContractLayoutCell: ContractLayoutCell;
    ContractLayoutEnum: ContractLayoutEnum;
    ContractLayoutHash: ContractLayoutHash;
    ContractLayoutHashingStrategy: ContractLayoutHashingStrategy;
    ContractLayoutKey: ContractLayoutKey;
    ContractLayoutStruct: ContractLayoutStruct;
    ContractLayoutStructField: ContractLayoutStructField;
    ContractMessageParamSpec: ContractMessageParamSpec;
    ContractMessageSpec: ContractMessageSpec;
    ContractProject: ContractProject;
    ContractProjectContract: ContractProjectContract;
    ContractProjectSource: ContractProjectSource;
    ContractSelector: ContractSelector;
    ContractStorageKey: ContractStorageKey;
    ContractStorageLayout: ContractStorageLayout;
    ContractTypeSpec: ContractTypeSpec;
    Conviction: Conviction;
    CoreAssignment: CoreAssignment;
    CoreIndex: CoreIndex;
    CoreOccupied: CoreOccupied;
    CreatedBlock: CreatedBlock;
    Data: Data;
    DeferredOffenceOf: DeferredOffenceOf;
    DefunctVoter: DefunctVoter;
    DelayKind: DelayKind;
    DelayKindBest: DelayKindBest;
    Delegations: Delegations;
    DeletedContract: DeletedContract;
    DepositBalance: DepositBalance;
    DepositBalanceOf: DepositBalanceOf;
    DestroyWitness: DestroyWitness;
    Digest: Digest;
    DigestItem: DigestItem;
    DigestOf: DigestOf;
    DispatchClass: DispatchClass;
    DispatchError: DispatchError;
    DispatchErrorModule: DispatchErrorModule;
    DispatchErrorTo198: DispatchErrorTo198;
    DispatchInfo: DispatchInfo;
    DispatchInfoTo190: DispatchInfoTo190;
    DispatchInfoTo244: DispatchInfoTo244;
    DispatchOutcome: DispatchOutcome;
    DispatchResult: DispatchResult;
    DispatchResultOf: DispatchResultOf;
    DispatchResultTo198: DispatchResultTo198;
    DisputeStatement: DisputeStatement;
    DisputeStatementSet: DisputeStatementSet;
    DoubleEncodedCall: DoubleEncodedCall;
    DoubleVoteReport: DoubleVoteReport;
    DownwardMessage: DownwardMessage;
    EcdsaSignature: EcdsaSignature;
    Ed25519Signature: Ed25519Signature;
    ElectionCompute: ElectionCompute;
    ElectionPhase: ElectionPhase;
    ElectionResult: ElectionResult;
    ElectionScore: ElectionScore;
    ElectionSize: ElectionSize;
    ElectionStatus: ElectionStatus;
    EncodedFinalityProofs: EncodedFinalityProofs;
    EncodedJustification: EncodedJustification;
    EpochAuthorship: EpochAuthorship;
    EraIndex: EraIndex;
    EraPoints: EraPoints;
    EraRewardPoints: EraRewardPoints;
    EraRewards: EraRewards;
    ErrorMetadataLatest: ErrorMetadataLatest;
    ErrorMetadataV10: ErrorMetadataV10;
    ErrorMetadataV11: ErrorMetadataV11;
    ErrorMetadataV12: ErrorMetadataV12;
    ErrorMetadataV13: ErrorMetadataV13;
    ErrorMetadataV9: ErrorMetadataV9;
    EthAccount: EthAccount;
    EthBlock: EthBlock;
    EthBloom: EthBloom;
    EthCallRequest: EthCallRequest;
    EthereumAccountId: EthereumAccountId;
    EthereumAddress: EthereumAddress;
    EthereumLookupSource: EthereumLookupSource;
    EthereumSignature: EthereumSignature;
    EthFilter: EthFilter;
    EthFilterAddress: EthFilterAddress;
    EthFilterChanges: EthFilterChanges;
    EthFilterTopic: EthFilterTopic;
    EthFilterTopicEntry: EthFilterTopicEntry;
    EthFilterTopicInner: EthFilterTopicInner;
    EthHeader: EthHeader;
    EthLog: EthLog;
    EthReceipt: EthReceipt;
    EthRichBlock: EthRichBlock;
    EthRichHeader: EthRichHeader;
    EthStorageProof: EthStorageProof;
    EthSubKind: EthSubKind;
    EthSubParams: EthSubParams;
    EthSubResult: EthSubResult;
    EthSyncInfo: EthSyncInfo;
    EthSyncStatus: EthSyncStatus;
    EthTransaction: EthTransaction;
    EthTransactionAction: EthTransactionAction;
    EthTransactionCondition: EthTransactionCondition;
    EthTransactionRequest: EthTransactionRequest;
    EthTransactionSignature: EthTransactionSignature;
    EthTransactionStatus: EthTransactionStatus;
    EthWork: EthWork;
    Event: Event;
    EventId: EventId;
    EventIndex: EventIndex;
    EventMetadataLatest: EventMetadataLatest;
    EventMetadataV10: EventMetadataV10;
    EventMetadataV11: EventMetadataV11;
    EventMetadataV12: EventMetadataV12;
    EventMetadataV13: EventMetadataV13;
    EventMetadataV9: EventMetadataV9;
    EventRecord: EventRecord;
    EvmAccount: EvmAccount;
    EvmLog: EvmLog;
    EvmVicinity: EvmVicinity;
    ExecReturnValue: ExecReturnValue;
    ExitError: ExitError;
    ExitFatal: ExitFatal;
    ExitReason: ExitReason;
    ExitRevert: ExitRevert;
    ExitSucceed: ExitSucceed;
    ExplicitDisputeStatement: ExplicitDisputeStatement;
    Exposure: Exposure;
    ExtendedBalance: ExtendedBalance;
    Extrinsic: Extrinsic;
    ExtrinsicEra: ExtrinsicEra;
    ExtrinsicMetadataLatest: ExtrinsicMetadataLatest;
    ExtrinsicMetadataV11: ExtrinsicMetadataV11;
    ExtrinsicMetadataV12: ExtrinsicMetadataV12;
    ExtrinsicMetadataV13: ExtrinsicMetadataV13;
    ExtrinsicOrHash: ExtrinsicOrHash;
    ExtrinsicPayload: ExtrinsicPayload;
    ExtrinsicPayloadUnknown: ExtrinsicPayloadUnknown;
    ExtrinsicPayloadV4: ExtrinsicPayloadV4;
    ExtrinsicSignature: ExtrinsicSignature;
    ExtrinsicSignatureV4: ExtrinsicSignatureV4;
    ExtrinsicStatus: ExtrinsicStatus;
    ExtrinsicsWeight: ExtrinsicsWeight;
    ExtrinsicUnknown: ExtrinsicUnknown;
    ExtrinsicV4: ExtrinsicV4;
    FeeDetails: FeeDetails;
    Fixed128: Fixed128;
    Fixed64: Fixed64;
    FixedI128: FixedI128;
    FixedI64: FixedI64;
    FixedU128: FixedU128;
    FixedU64: FixedU64;
    Forcing: Forcing;
    ForkTreePendingChange: ForkTreePendingChange;
    ForkTreePendingChangeNode: ForkTreePendingChangeNode;
    FullIdentification: FullIdentification;
    FunctionArgumentMetadataLatest: FunctionArgumentMetadataLatest;
    FunctionArgumentMetadataV10: FunctionArgumentMetadataV10;
    FunctionArgumentMetadataV11: FunctionArgumentMetadataV11;
    FunctionArgumentMetadataV12: FunctionArgumentMetadataV12;
    FunctionArgumentMetadataV13: FunctionArgumentMetadataV13;
    FunctionArgumentMetadataV9: FunctionArgumentMetadataV9;
    FunctionMetadataLatest: FunctionMetadataLatest;
    FunctionMetadataV10: FunctionMetadataV10;
    FunctionMetadataV11: FunctionMetadataV11;
    FunctionMetadataV12: FunctionMetadataV12;
    FunctionMetadataV13: FunctionMetadataV13;
    FunctionMetadataV9: FunctionMetadataV9;
    FundIndex: FundIndex;
    FundInfo: FundInfo;
    Gas: Gas;
    GiltBid: GiltBid;
    GlobalValidationData: GlobalValidationData;
    GlobalValidationSchedule: GlobalValidationSchedule;
    GrandpaCommit: GrandpaCommit;
    GrandpaEquivocation: GrandpaEquivocation;
    GrandpaEquivocationProof: GrandpaEquivocationProof;
    GrandpaEquivocationValue: GrandpaEquivocationValue;
    GrandpaJustification: GrandpaJustification;
    GrandpaPrecommit: GrandpaPrecommit;
    GrandpaPrevote: GrandpaPrevote;
    GrandpaSignedPrecommit: GrandpaSignedPrecommit;
    GroupIndex: GroupIndex;
    H1024: H1024;
    H128: H128;
    H160: H160;
    H2048: H2048;
    H256: H256;
    H32: H32;
    H512: H512;
    H64: H64;
    Hash: Hash;
    HeadData: HeadData;
    Header: Header;
    HeaderPartial: HeaderPartial;
    Health: Health;
    Heartbeat: Heartbeat;
    HeartbeatTo244: HeartbeatTo244;
    HostConfiguration: HostConfiguration;
    HostFnWeights: HostFnWeights;
    HostFnWeightsTo264: HostFnWeightsTo264;
    HrmpChannel: HrmpChannel;
    HrmpChannelId: HrmpChannelId;
    HrmpOpenChannelRequest: HrmpOpenChannelRequest;
    i128: i128;
    I128: I128;
    i16: i16;
    I16: I16;
    i256: i256;
    I256: I256;
    i32: i32;
    I32: I32;
    I32F32: I32F32;
    i64: i64;
    I64: I64;
    i8: i8;
    I8: I8;
    IdentificationTuple: IdentificationTuple;
    IdentityFields: IdentityFields;
    IdentityInfo: IdentityInfo;
    IdentityInfoAdditional: IdentityInfoAdditional;
    IdentityJudgement: IdentityJudgement;
    ImmortalEra: ImmortalEra;
    ImportedAux: ImportedAux;
    InboundDownwardMessage: InboundDownwardMessage;
    InboundHrmpMessage: InboundHrmpMessage;
    InboundHrmpMessages: InboundHrmpMessages;
    InboundStatus: InboundStatus;
    IncludedBlocks: IncludedBlocks;
    InclusionFee: InclusionFee;
    IncomingParachain: IncomingParachain;
    IncomingParachainDeploy: IncomingParachainDeploy;
    IncomingParachainFixed: IncomingParachainFixed;
    Index: Index;
    IndicesLookupSource: IndicesLookupSource;
    IndividualExposure: IndividualExposure;
    InitializationData: InitializationData;
    InstanceDetails: InstanceDetails;
    InstanceId: InstanceId;
    InstanceMetadata: InstanceMetadata;
    InstantiateRequest: InstantiateRequest;
    InstantiateReturnValue: InstantiateReturnValue;
    InstructionWeights: InstructionWeights;
    InvalidDisputeStatementKind: InvalidDisputeStatementKind;
    InvalidTransaction: InvalidTransaction;
    Json: Json;
    Junction: Junction;
    Justification: Justification;
    JustificationNotification: JustificationNotification;
    Justifications: Justifications;
    Key: Key;
    KeyOwnerProof: KeyOwnerProof;
    Keys: Keys;
    KeyType: KeyType;
    KeyTypeId: KeyTypeId;
    KeyValue: KeyValue;
    KeyValueOption: KeyValueOption;
    Kind: Kind;
    LastContribution: LastContribution;
    LastRuntimeUpgradeInfo: LastRuntimeUpgradeInfo;
    LeasePeriod: LeasePeriod;
    LeasePeriodOf: LeasePeriodOf;
    Limits: Limits;
    LimitsTo264: LimitsTo264;
    LocalValidationData: LocalValidationData;
    LockIdentifier: LockIdentifier;
    LookupSource: LookupSource;
    LookupTarget: LookupTarget;
    LotteryConfig: LotteryConfig;
    MaybeRandomness: MaybeRandomness;
    MaybeVrf: MaybeVrf;
    MemberCount: MemberCount;
    MembershipProof: MembershipProof;
    Message: Message;
    MessageError: MessageError;
    MessageId: MessageId;
    MessageIngestionType: MessageIngestionType;
    MessageQueueChain: MessageQueueChain;
    MessagingStateSnapshot: MessagingStateSnapshot;
    MessagingStateSnapshotEgressEntry: MessagingStateSnapshotEgressEntry;
    MetadataAll: MetadataAll;
    MetadataLatest: MetadataLatest;
    MetadataV10: MetadataV10;
    MetadataV11: MetadataV11;
    MetadataV12: MetadataV12;
    MetadataV13: MetadataV13;
    MetadataV9: MetadataV9;
    MmrLeafProof: MmrLeafProof;
    MmrRootHash: MmrRootHash;
    ModuleConstantMetadataLatest: ModuleConstantMetadataLatest;
    ModuleConstantMetadataV10: ModuleConstantMetadataV10;
    ModuleConstantMetadataV11: ModuleConstantMetadataV11;
    ModuleConstantMetadataV12: ModuleConstantMetadataV12;
    ModuleConstantMetadataV13: ModuleConstantMetadataV13;
    ModuleConstantMetadataV9: ModuleConstantMetadataV9;
    ModuleId: ModuleId;
    ModuleMetadataLatest: ModuleMetadataLatest;
    ModuleMetadataV10: ModuleMetadataV10;
    ModuleMetadataV11: ModuleMetadataV11;
    ModuleMetadataV12: ModuleMetadataV12;
    ModuleMetadataV13: ModuleMetadataV13;
    ModuleMetadataV9: ModuleMetadataV9;
    Moment: Moment;
    MomentOf: MomentOf;
    MoreAttestations: MoreAttestations;
    MortalEra: MortalEra;
    MultiAddress: MultiAddress;
    MultiAsset: MultiAsset;
    MultiAssetAbstractFungible: MultiAssetAbstractFungible;
    MultiAssetAbstractNonFungible: MultiAssetAbstractNonFungible;
    MultiAssetConcreteFungible: MultiAssetConcreteFungible;
    MultiAssetConcreteNonFungible: MultiAssetConcreteNonFungible;
    MultiDisputeStatementSet: MultiDisputeStatementSet;
    MultiLocation: MultiLocation;
    Multiplier: Multiplier;
    Multisig: Multisig;
    MultiSignature: MultiSignature;
    MultiSigner: MultiSigner;
    NetworkId: NetworkId;
    NetworkState: NetworkState;
    NetworkStatePeerset: NetworkStatePeerset;
    NetworkStatePeersetInfo: NetworkStatePeersetInfo;
    NewBidder: NewBidder;
    NextAuthority: NextAuthority;
    NextConfigDescriptor: NextConfigDescriptor;
    NextConfigDescriptorV1: NextConfigDescriptorV1;
    Node: Node;
    NodeRole: NodeRole;
    Nominations: Nominations;
    NominatorIndex: NominatorIndex;
    NominatorIndexCompact: NominatorIndexCompact;
    NotConnectedPeer: NotConnectedPeer;
    Null: Null;
    OffchainAccuracy: OffchainAccuracy;
    OffchainAccuracyCompact: OffchainAccuracyCompact;
    OffenceDetails: OffenceDetails;
    Offender: Offender;
    OpaqueCall: OpaqueCall;
    OpaqueMultiaddr: OpaqueMultiaddr;
    OpaqueNetworkState: OpaqueNetworkState;
    OpaquePeerId: OpaquePeerId;
    OpaqueTimeSlot: OpaqueTimeSlot;
    OpenTip: OpenTip;
    OpenTipFinderTo225: OpenTipFinderTo225;
    OpenTipTip: OpenTipTip;
    OpenTipTo225: OpenTipTo225;
    Origin: Origin;
    OriginCaller: OriginCaller;
    OutboundHrmpMessage: OutboundHrmpMessage;
    OutboundStatus: OutboundStatus;
    Outcome: Outcome;
    OverweightIndex: OverweightIndex;
    Owner: Owner;
    PageCounter: PageCounter;
    PageIndexData: PageIndexData;
    PalletId: PalletId;
    PalletsOrigin: PalletsOrigin;
    PalletVersion: PalletVersion;
    ParachainDispatchOrigin: ParachainDispatchOrigin;
    ParachainInherentData: ParachainInherentData;
    ParachainProposal: ParachainProposal;
    ParachainsInherentData: ParachainsInherentData;
    ParaGenesisArgs: ParaGenesisArgs;
    ParaId: ParaId;
    ParaInfo: ParaInfo;
    ParaLifecycle: ParaLifecycle;
    ParaPastCodeMeta: ParaPastCodeMeta;
    ParaScheduling: ParaScheduling;
    ParathreadClaim: ParathreadClaim;
    ParathreadClaimQueue: ParathreadClaimQueue;
    ParathreadEntry: ParathreadEntry;
    ParaValidatorIndex: ParaValidatorIndex;
    Pays: Pays;
    Peer: Peer;
    PeerEndpoint: PeerEndpoint;
    PeerEndpointAddr: PeerEndpointAddr;
    PeerInfo: PeerInfo;
    PeerPing: PeerPing;
    PendingChange: PendingChange;
    PendingPause: PendingPause;
    PendingResume: PendingResume;
    Perbill: Perbill;
    Percent: Percent;
    PerDispatchClassU32: PerDispatchClassU32;
    PerDispatchClassWeight: PerDispatchClassWeight;
    PerDispatchClassWeightsPerClass: PerDispatchClassWeightsPerClass;
    Period: Period;
    Permill: Permill;
    PermissionLatest: PermissionLatest;
    PermissionsV1: PermissionsV1;
    PermissionVersions: PermissionVersions;
    Perquintill: Perquintill;
    PersistedValidationData: PersistedValidationData;
    PerU16: PerU16;
    Phantom: Phantom;
    PhantomData: PhantomData;
    Phase: Phase;
    PhragmenScore: PhragmenScore;
    PluralityJunction: PluralityJunction;
    Points: Points;
    Precommits: Precommits;
    PrefabWasmModule: PrefabWasmModule;
    PrefixedStorageKey: PrefixedStorageKey;
    PreimageStatus: PreimageStatus;
    PreimageStatusAvailable: PreimageStatusAvailable;
    PreRuntime: PreRuntime;
    Prevotes: Prevotes;
    Priority: Priority;
    PriorLock: PriorLock;
    PropIndex: PropIndex;
    Proposal: Proposal;
    ProposalIndex: ProposalIndex;
    ProxyAnnouncement: ProxyAnnouncement;
    ProxyDefinition: ProxyDefinition;
    ProxyState: ProxyState;
    ProxyType: ProxyType;
    QueueConfigData: QueueConfigData;
    QueuedParathread: QueuedParathread;
    Randomness: Randomness;
    Raw: Raw;
    RawAuraPreDigest: RawAuraPreDigest;
    RawBabePreDigest: RawBabePreDigest;
    RawBabePreDigestCompat: RawBabePreDigestCompat;
    RawBabePreDigestPrimary: RawBabePreDigestPrimary;
    RawBabePreDigestPrimaryTo159: RawBabePreDigestPrimaryTo159;
    RawBabePreDigestSecondaryPlain: RawBabePreDigestSecondaryPlain;
    RawBabePreDigestSecondaryTo159: RawBabePreDigestSecondaryTo159;
    RawBabePreDigestSecondaryVRF: RawBabePreDigestSecondaryVRF;
    RawBabePreDigestTo159: RawBabePreDigestTo159;
    RawOrigin: RawOrigin;
    RawSolution: RawSolution;
    RawSolutionTo265: RawSolutionTo265;
    RawSolutionWith16: RawSolutionWith16;
    RawSolutionWith24: RawSolutionWith24;
    RawVRFOutput: RawVRFOutput;
    ReadProof: ReadProof;
    ReadySolution: ReadySolution;
    Reasons: Reasons;
    RecoveryConfig: RecoveryConfig;
    RefCount: RefCount;
    RefCountTo259: RefCountTo259;
    ReferendumIndex: ReferendumIndex;
    ReferendumInfo: ReferendumInfo;
    ReferendumInfoFinished: ReferendumInfoFinished;
    ReferendumInfoTo239: ReferendumInfoTo239;
    ReferendumStatus: ReferendumStatus;
    RegisteredParachainInfo: RegisteredParachainInfo;
    RegistrarIndex: RegistrarIndex;
    RegistrarInfo: RegistrarInfo;
    Registration: Registration;
    RegistrationJudgement: RegistrationJudgement;
    RelayBlockNumber: RelayBlockNumber;
    RelayChainBlockNumber: RelayChainBlockNumber;
    RelayChainHash: RelayChainHash;
    RelayHash: RelayHash;
    Releases: Releases;
    Remark: Remark;
    Renouncing: Renouncing;
    RentProjection: RentProjection;
    ReportedRoundStates: ReportedRoundStates;
    Reporter: Reporter;
    ReportIdOf: ReportIdOf;
    ReserveData: ReserveData;
    ReserveIdentifier: ReserveIdentifier;
    Retriable: Retriable;
    RewardDestination: RewardDestination;
    RewardPoint: RewardPoint;
    RoundSnapshot: RoundSnapshot;
    RoundState: RoundState;
    RpcMethods: RpcMethods;
    RuntimeDbWeight: RuntimeDbWeight;
    RuntimeDispatchInfo: RuntimeDispatchInfo;
    RuntimeVersion: RuntimeVersion;
    RuntimeVersionApi: RuntimeVersionApi;
    RuntimeVersionPartial: RuntimeVersionPartial;
    Schedule: Schedule;
    Scheduled: Scheduled;
    ScheduledTo254: ScheduledTo254;
    SchedulePeriod: SchedulePeriod;
    SchedulePriority: SchedulePriority;
    ScheduleTo212: ScheduleTo212;
    ScheduleTo258: ScheduleTo258;
    ScheduleTo264: ScheduleTo264;
    Scheduling: Scheduling;
    Seal: Seal;
    SealV0: SealV0;
    SeatHolder: SeatHolder;
    SeedOf: SeedOf;
    ServiceQuality: ServiceQuality;
    SessionIndex: SessionIndex;
    SessionInfo: SessionInfo;
    SessionInfoValidatorGroup: SessionInfoValidatorGroup;
    SessionKeys1: SessionKeys1;
    SessionKeys10: SessionKeys10;
    SessionKeys10B: SessionKeys10B;
    SessionKeys2: SessionKeys2;
    SessionKeys3: SessionKeys3;
    SessionKeys4: SessionKeys4;
    SessionKeys5: SessionKeys5;
    SessionKeys6: SessionKeys6;
    SessionKeys6B: SessionKeys6B;
    SessionKeys7: SessionKeys7;
    SessionKeys7B: SessionKeys7B;
    SessionKeys8: SessionKeys8;
    SessionKeys8B: SessionKeys8B;
    SessionKeys9: SessionKeys9;
    SessionKeys9B: SessionKeys9B;
    SetId: SetId;
    SetIndex: SetIndex;
    SiField: SiField;
    Signature: Signature;
    SignedAvailabilityBitfield: SignedAvailabilityBitfield;
    SignedAvailabilityBitfields: SignedAvailabilityBitfields;
    SignedBlock: SignedBlock;
    SignedBlockWithJustification: SignedBlockWithJustification;
    SignedBlockWithJustifications: SignedBlockWithJustifications;
    SignedSubmission: SignedSubmission;
    SignedSubmissionOf: SignedSubmissionOf;
    SignerPayload: SignerPayload;
    SigningContext: SigningContext;
    SiLookupTypeId: SiLookupTypeId;
    SiPath: SiPath;
    SiType: SiType;
    SiTypeDef: SiTypeDef;
    SiTypeDefArray: SiTypeDefArray;
    SiTypeDefComposite: SiTypeDefComposite;
    SiTypeDefPrimitive: SiTypeDefPrimitive;
    SiTypeDefSequence: SiTypeDefSequence;
    SiTypeDefTuple: SiTypeDefTuple;
    SiTypeDefVariant: SiTypeDefVariant;
    SiVariant: SiVariant;
    SlashingSpans: SlashingSpans;
    SlashingSpansTo204: SlashingSpansTo204;
    SlashJournalEntry: SlashJournalEntry;
    Slot: Slot;
    SlotNumber: SlotNumber;
    SlotRange: SlotRange;
    SocietyJudgement: SocietyJudgement;
    SocietyVote: SocietyVote;
    SolutionOrSnapshotSize: SolutionOrSnapshotSize;
    SolutionSupport: SolutionSupport;
    SolutionSupports: SolutionSupports;
    SpanIndex: SpanIndex;
    SpanRecord: SpanRecord;
    Sr25519Signature: Sr25519Signature;
    StakingLedger: StakingLedger;
    StakingLedgerTo223: StakingLedgerTo223;
    StakingLedgerTo240: StakingLedgerTo240;
    Statement: Statement;
    StatementKind: StatementKind;
    StorageChangeSet: StorageChangeSet;
    StorageData: StorageData;
    StorageEntryMetadataLatest: StorageEntryMetadataLatest;
    StorageEntryMetadataV10: StorageEntryMetadataV10;
    StorageEntryMetadataV11: StorageEntryMetadataV11;
    StorageEntryMetadataV12: StorageEntryMetadataV12;
    StorageEntryMetadataV13: StorageEntryMetadataV13;
    StorageEntryMetadataV9: StorageEntryMetadataV9;
    StorageEntryModifierLatest: StorageEntryModifierLatest;
    StorageEntryModifierV10: StorageEntryModifierV10;
    StorageEntryModifierV11: StorageEntryModifierV11;
    StorageEntryModifierV12: StorageEntryModifierV12;
    StorageEntryModifierV13: StorageEntryModifierV13;
    StorageEntryModifierV9: StorageEntryModifierV9;
    StorageEntryTypeLatest: StorageEntryTypeLatest;
    StorageEntryTypeV10: StorageEntryTypeV10;
    StorageEntryTypeV11: StorageEntryTypeV11;
    StorageEntryTypeV12: StorageEntryTypeV12;
    StorageEntryTypeV13: StorageEntryTypeV13;
    StorageEntryTypeV9: StorageEntryTypeV9;
    StorageHasher: StorageHasher;
    StorageHasherV10: StorageHasherV10;
    StorageHasherV11: StorageHasherV11;
    StorageHasherV12: StorageHasherV12;
    StorageHasherV13: StorageHasherV13;
    StorageHasherV9: StorageHasherV9;
    StorageKey: StorageKey;
    StorageKind: StorageKind;
    StorageMetadataLatest: StorageMetadataLatest;
    StorageMetadataV10: StorageMetadataV10;
    StorageMetadataV11: StorageMetadataV11;
    StorageMetadataV12: StorageMetadataV12;
    StorageMetadataV13: StorageMetadataV13;
    StorageMetadataV9: StorageMetadataV9;
    StorageProof: StorageProof;
    StoredPendingChange: StoredPendingChange;
    StoredState: StoredState;
    StrikeCount: StrikeCount;
    SubId: SubId;
    SubmissionIndicesOf: SubmissionIndicesOf;
    SyncState: SyncState;
    SystemInherentData: SystemInherentData;
    SystemOrigin: SystemOrigin;
    Tally: Tally;
    TaskAddress: TaskAddress;
    TAssetBalance: TAssetBalance;
    TAssetDepositBalance: TAssetDepositBalance;
    Text: Text;
    Timepoint: Timepoint;
    TokenError: TokenError;
    TombstoneContractInfo: TombstoneContractInfo;
    TraceBlockResponse: TraceBlockResponse;
    TraceError: TraceError;
    TransactionInfo: TransactionInfo;
    TransactionPriority: TransactionPriority;
    TransactionStorageProof: TransactionStorageProof;
    TransactionValidityError: TransactionValidityError;
    TransientValidationData: TransientValidationData;
    TreasuryProposal: TreasuryProposal;
    TrieId: TrieId;
    TrieIndex: TrieIndex;
    Type: Type;
    u128: u128;
    U128: U128;
    u16: u16;
    U16: U16;
    u256: u256;
    U256: U256;
    u32: u32;
    U32: U32;
    U32F32: U32F32;
    u64: u64;
    U64: U64;
    u8: u8;
    U8: U8;
    UnappliedSlash: UnappliedSlash;
    UnappliedSlashOther: UnappliedSlashOther;
    UncleEntryItem: UncleEntryItem;
    UnknownTransaction: UnknownTransaction;
    UnlockChunk: UnlockChunk;
    UpwardMessage: UpwardMessage;
    usize: usize;
    USize: USize;
    ValidationCode: ValidationCode;
    ValidationCodeHash: ValidationCodeHash;
    ValidationData: ValidationData;
    ValidationDataType: ValidationDataType;
    ValidationFunctionParams: ValidationFunctionParams;
    ValidatorCount: ValidatorCount;
    ValidatorId: ValidatorId;
    ValidatorIdOf: ValidatorIdOf;
    ValidatorIndex: ValidatorIndex;
    ValidatorIndexCompact: ValidatorIndexCompact;
    ValidatorPrefs: ValidatorPrefs;
    ValidatorPrefsTo145: ValidatorPrefsTo145;
    ValidatorPrefsTo196: ValidatorPrefsTo196;
    ValidatorPrefsWithBlocked: ValidatorPrefsWithBlocked;
    ValidatorPrefsWithCommission: ValidatorPrefsWithCommission;
    ValidatorSetId: ValidatorSetId;
    ValidatorSignature: ValidatorSignature;
    ValidDisputeStatementKind: ValidDisputeStatementKind;
    ValidityAttestation: ValidityAttestation;
    VecInboundHrmpMessage: VecInboundHrmpMessage;
    VersionedMultiAsset: VersionedMultiAsset;
    VersionedMultiLocation: VersionedMultiLocation;
    VersionedXcm: VersionedXcm;
    VestingInfo: VestingInfo;
    VestingSchedule: VestingSchedule;
    Vote: Vote;
    VoteIndex: VoteIndex;
    Voter: Voter;
    VoterInfo: VoterInfo;
    Votes: Votes;
    VotesTo230: VotesTo230;
    VoteThreshold: VoteThreshold;
    VoteWeight: VoteWeight;
    Voting: Voting;
    VotingDelegating: VotingDelegating;
    VotingDirect: VotingDirect;
    VotingDirectVote: VotingDirectVote;
    VouchingStatus: VouchingStatus;
    VrfData: VrfData;
    VrfOutput: VrfOutput;
    VrfProof: VrfProof;
    Weight: Weight;
    WeightMultiplier: WeightMultiplier;
    WeightPerClass: WeightPerClass;
    WeightToFeeCoefficient: WeightToFeeCoefficient;
    WinnersData: WinnersData;
    WinnersDataTuple: WinnersDataTuple;
    WinningData: WinningData;
    WinningDataEntry: WinningDataEntry;
    WithdrawReasons: WithdrawReasons;
    Xcm: Xcm;
    XcmAssetEffects: XcmAssetEffects;
    XcmError: XcmError;
    XcmHrmpChannelAccepted: XcmHrmpChannelAccepted;
    XcmHrmpChannelClosing: XcmHrmpChannelClosing;
    XcmHrmpNewChannelOpenRequest: XcmHrmpNewChannelOpenRequest;
    XcmOrder: XcmOrder;
    XcmOrderBuyExecution: XcmOrderBuyExecution;
    XcmOrderDepositAsset: XcmOrderDepositAsset;
    XcmOrderDepositReserveAsset: XcmOrderDepositReserveAsset;
    XcmOrderExchangeAsset: XcmOrderExchangeAsset;
    XcmOrderInitiateReserveWithdraw: XcmOrderInitiateReserveWithdraw;
    XcmOrderInitiateTeleport: XcmOrderInitiateTeleport;
    XcmOrderQueryHolding: XcmOrderQueryHolding;
    XcmOrigin: XcmOrigin;
    XcmOriginKind: XcmOriginKind;
    XcmpMessageFormat: XcmpMessageFormat;
    XcmQueryResponse: XcmQueryResponse;
    XcmRelayedFrom: XcmRelayedFrom;
    XcmReserveAssetDeposit: XcmReserveAssetDeposit;
    XcmResponse: XcmResponse;
    XcmTeleportAsset: XcmTeleportAsset;
    XcmTransact: XcmTransact;
    XcmTransferAsset: XcmTransferAsset;
    XcmTransferReserveAsset: XcmTransferReserveAsset;
    XcmWithdrawAsset: XcmWithdrawAsset;
  }
}
