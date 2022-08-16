import { createAction, props } from '@ngrx/store';
import {TrainingRequest} from '../models';

export const TRAINING_REQUEST = '[TRAINING REQUEST] Train ML Model API';
export const TRAINING_REQUEST_SUCCESS = '[TRAINING REQUEST] Train ML Model API Success';
export const TRAINING_REQUEST_FAILURE = '[TRAINING REQUEST] Train ML Model API Failure';

export const trainingRequest = createAction(
    TRAINING_REQUEST,
  props<TrainingRequest>()
);

export const trainingRequestSuccess = createAction(
    TRAINING_REQUEST,
  props<TrainingRequest>()
);

export const trainingRequestFailure = createAction(
    TRAINING_REQUEST,
  props<TrainingRequest>()
);
