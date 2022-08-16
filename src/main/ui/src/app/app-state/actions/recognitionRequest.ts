import { createAction, props } from '@ngrx/store';
import {RecognitionRequest} from "../models";

export const RECOGNITION_REQUEST = '[RECOGNITION REQUEST] Recognize ML Model API';
export const RECOGNITION_REQUEST_SUCCESS = '[RECOGNITION REQUEST] Recognize ML Model API Success';
export const RECOGNITION_REQUEST_FAILURE = '[RECOGNITION REQUEST] Recognize ML Model API Failure';

export const recognitionRequest = createAction(
    RECOGNITION_REQUEST,
  props<RecognitionRequest>()
);

export const recognitionRequestSuccess = createAction(
    RECOGNITION_REQUEST,
  props<RecognitionRequest>()
);

export const recognitionRequestFailure = createAction(
    RECOGNITION_REQUEST,
  props<RecognitionRequest>()
);
