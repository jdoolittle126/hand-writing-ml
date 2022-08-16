class TrainingData {
    character: string;
    input: Array<CanvasImageData>;
}

class CanvasImageData {
    smoothImage: ImageData;
    pixelImage: ImageData;
}

class ModelConfiguration {
    static PIXEL_GRID_WIDTH: number = 5;
    static PIXEL_GRID_HEIGHT: number = 6;
    static PIXEL_ALPHA_THRESHOLD: number = 100;
    numberOfSamples: number;
    sessionName: string;

}

export {TrainingData, CanvasImageData, ModelConfiguration};