import * as trainingRequestActions from '../actions/trainingRequest';
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

export const createTrainingReducer = createReducer(
  initialState,
  on(trainingRequestActions.trainingRequest, state => ({...state, isLoading: true, isLoadingSuccess: false, result: undefined})),
  on(trainingRequestActions.trainingRequestSuccess, (state, result) => ({...state, isLoading: false, isLoadingSuccess: true, result})),
  on(trainingRequestActions.trainingRequestFailure, (state, result) => ({...state, isLoading: false, isLoadingSuccess: true, result}))
);

export function reducer(state: State | undefined, action: Action) {
  return createTrainingReducer(state, action);
}

