import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {takeUntil} from "rxjs/operators";
import {InputComponent} from "../input/input.component";
import {Util} from "../util";
import {AppService} from "../app.service";
import {Subject} from "rxjs";
import {NetworkVisualizerComponent} from "../network-visualizer/network-visualizer.component";

export type GridData = {
    width: number;
    height: number;
    data: number[];
};

export type NetworkResult = {
    inputsGrid: GridData;
    weights1Grid: GridData;
    hiddenGrid: GridData;
    weights2Grid: GridData;
    outputGrid: GridData;
};

export type RecognitionResult = {
    guess: string;
    characters: string[];
    inputs: number[];
    weights1: number[];
    hiddens: number[];
    weights2: number[];
    confidence: number[];
}

@Component({
    selector: 'model-tester',
    templateUrl: 'model-tester.component.html',
    styleUrls: ['./model-tester.component.css']
})


// TODO Add to module!
export class ModelTesterComponent implements OnDestroy, OnInit {

    @ViewChild('input') sampleInput: InputComponent;
    @ViewChild('visual') networkVisual: NetworkVisualizerComponent;

    @Input() sessionName: string;

    previousSamples: {character: string, input: {smoothImage: ImageData, pixelImage: ImageData}}[] = [];
    sample: {smoothImage: ImageData, pixelImage: ImageData} = null;
    destroy$: Subject<boolean> = new Subject<boolean>();

    networkResult: NetworkResult = null;

    constructor(private appService: AppService) {
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    onClear() {
        this.sampleInput.clear();
    }

    onTry() {

        this.sampleInput.getViewData(({smoothImage, pixelImage}) => {
            this.sample = {smoothImage: smoothImage, pixelImage: pixelImage};

            let recognitionRequest = {
                sessionName: this.sessionName,
                data: Util.getPixelData(this.sample.pixelImage)
            }

            this.appService.recognitionRequest(recognitionRequest).pipe(takeUntil(this.destroy$)).subscribe(data => {

                let result: RecognitionResult = {
                    guess: data['guess'],
                    characters: data['characters'],
                    inputs: data['inputs'],
                    weights1: data['weights1'],
                    hiddens: data['hiddens'],
                    weights2: data['weights2'],
                    confidence: data['confidence'],
                }

                let networkResult: NetworkResult = {
                    inputsGrid: {
                        width: result.inputs.length,
                        height: 1,
                        data: result.inputs
                    },
                    weights1Grid: {
                        width: result.inputs.length,
                        height: result.hiddens.length,
                        data: result.weights1
                    },
                    hiddenGrid: {
                        width: 1,
                        height: result.hiddens.length,
                        data: result.hiddens
                    },
                    weights2Grid: {
                        width: result.characters.length,
                        height: result.hiddens.length,
                        data: result.weights2
                    },
                    outputGrid: {
                        width: result.confidence.length,
                        height: 1,
                        data: result.confidence
                    }
                }

                console.log(networkResult.inputsGrid)

                this.networkResult = networkResult;

                this.previousSamples.push({
                    character: data['guess'],
                    input: {smoothImage: smoothImage, pixelImage: pixelImage}
                });

            });

        });
    }


}