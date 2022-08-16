export class TrainingRequest {
  sessionName: string;
  gridWidth: number;
  gridHeight: number;
  sampleCount: number;
  requestData: Array<{character: string, input: Array<Array<boolean>>}>;
}