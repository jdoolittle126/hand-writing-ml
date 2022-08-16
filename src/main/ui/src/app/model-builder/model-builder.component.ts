import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from "rxjs/operators";
import {Util} from "../util";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../app.service";
import {Subject} from "rxjs";

export enum BuilderState {
    SETTINGS,
    TRAINING,
    TRAINING_REQUESTED,
    TRAINED
}

@Component({
    selector: 'model-builder',
    templateUrl: 'model-builder.component.html',
    styleUrls: ['./model-builder.component.css']
})
export class ModelBuilderComponent implements OnDestroy {

    @Input() onTrained: (session: string) => void;

    settingsForm = new FormGroup({
        sampleNumber: new FormControl('1', Validators.nullValidator && Validators.required),
        sessionName: new FormControl(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
            Validators.nullValidator && Validators.required
        )
    });

    builderState: BuilderState = BuilderState.SETTINGS;
    images: {character: string, input: Array<{smoothImage: ImageData, pixelImage: ImageData}>}[] = [];
    stepNumber: number = 0;

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private appService: AppService) {
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    nextState() {
        switch (this.builderState) {
            case BuilderState.SETTINGS:
                this.builderState = BuilderState.TRAINING;
                break;
            case BuilderState.TRAINING:
                this.builderState = BuilderState.TRAINING_REQUESTED;
                break;
            case BuilderState.TRAINING_REQUESTED:
                this.builderState = BuilderState.TRAINED;
                break;
            default:
                this.builderState = BuilderState.TRAINED;
        }
    }

    onAdd(data: {character: string, input: Array<{smoothImage: ImageData, pixelImage: ImageData}>}) {
        this.images.push(data);
    }

    onTrain() {
        this.nextState();
        let requestData: Array<{character: string, input: Array<Array<boolean>>}> = [];

        for (const {character, input} of this.images) {
            let pixelData: Array<Array<boolean>> = [];
            for(const {smoothImage, pixelImage} of input) {
                pixelData.push(Util.getPixelData(pixelImage));
            }
            requestData.push({character: character, input: pixelData})
        }

        let trainingRequest = {
            sessionName: this.settingsForm.value.sessionName,
            gridWidth: 5,
            gridHeight: 6,
            sampleCount: this.settingsForm.value.sampleNumber,
            requestData: requestData
        };

        this.appService.trainingRequest(trainingRequest)
            .pipe(takeUntil(this.destroy$))
            .subscribe(data => {
                console.log(data);
                this.nextState();
                this.onTrained(this.settingsForm.value.sessionName);
            });
    }


}