import * as recognitionRequestActions from '../actions/recognitionRequest';
import { Action, createReducer, on } from '@ngrx/store';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    result: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    result: []
};

export const createRecognitionReducer = createReducer(
  initialState,
  on(recognitionRequestActions.recognitionRequest, state => ({...state, isLoading: true, isLoadingSuccess: false, result: undefined})),
  on(recognitionRequestActions.recognitionRequestSuccess, (state, result) => ({...state, isLoading: false, isLoadingSuccess: true, result})),
  on(recognitionRequestActions.recognitionRequestFailure, (state, result) => ({...state, isLoading: false, isLoadingSuccess: true, result}))
);

export function reducer(state: State | undefined, action: Action) {
  return createRecognitionReducer(state, action);
}
