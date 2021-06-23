export interface ProgramModel {
    hash: string;
    blockHash: string;
    programNumber: number;
    name: string;
    callCount: number;
    uploadedAt: string;
}

export interface ProgramState {
    programs: ProgramModel[];
    loading: boolean,
    error: null|string;
}

export enum ProgramActionTypes{
    FETCH_PROGRAMS = 'FETCH_PROGRAMS',
    FETCH_PROGRAMS_SUCCESS = 'FETCH_PROGRAMS_SUCCESS',
    FETCH_PROGRAMS_ERROR = 'FETCH_PROGRAMS_ERROR',
    FETCH_PROGRAM = 'FETCH_PROGRAM',
    FETCH_PROGRAM_SUCCESS = 'FETCH_PROGRAM_SUCCESS',
    FETCH_PROGRAM_ERROR = 'FETCH_PROGRAM_ERROR',
    RESET_PROGRAMS = 'RESET_PROGRAMS'
}

interface FetchProgramsAction{
    type: ProgramActionTypes.FETCH_PROGRAMS;
}
interface FetchProgramsSuccessAction{
    type: ProgramActionTypes.FETCH_PROGRAMS_SUCCESS;
    payload: [];
}
interface FetchProgramsErrorAction{
    type: ProgramActionTypes.FETCH_PROGRAMS_ERROR;
    payload: string;
}

interface FetchProgramAction{
    type: ProgramActionTypes.FETCH_PROGRAM;
}

interface FetchProgramSuccessAction{
    type: ProgramActionTypes.FETCH_PROGRAM_SUCCESS;
    payload: ProgramModel;
}

interface FetchProgramErrorAction{
    type: ProgramActionTypes.FETCH_PROGRAM_ERROR;
    payload: string;
}

interface ResetProgramsAction{
    type: ProgramActionTypes.RESET_PROGRAMS
}

export type ProgramAction = FetchProgramsAction | FetchProgramsErrorAction | FetchProgramsSuccessAction | FetchProgramAction | FetchProgramSuccessAction | FetchProgramErrorAction | ResetProgramsAction;