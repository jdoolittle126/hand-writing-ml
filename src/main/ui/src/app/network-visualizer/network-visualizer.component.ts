import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ModelConfiguration} from "../models/ModelConfiguration";
import {GridCanvasComponent} from "../grid-canvas/grid-canvas.component";
import {GridData, NetworkResult} from "../model-tester/model-tester.component";
import {Util} from "../util";

@Component({
    selector: 'network-visualizer',
    templateUrl: 'network-visualizer.component.html',
    styleUrls: ['./network-visualizer.component.css']
})

export class NetworkVisualizerComponent implements AfterViewInit, OnChanges {

    @ViewChild('inputs') public inputs: GridCanvasComponent
    @ViewChild('weights1') public weights1: GridCanvasComponent
    @ViewChild('hidden') public hidden: GridCanvasComponent
    @ViewChild('weights2') public weights2: GridCanvasComponent
    @ViewChild('outputs') public outputs: GridCanvasComponent

    @Input() public inputData: NetworkResult = null;
    @Input() public colorEmpty: string;
    @Input() public colorFull: string;

    ngAfterViewInit() {
        this.render();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.render();
    }

    private setFor(component: GridCanvasComponent, data: GridData) {
        let index = 0;
        let min = Math.min(...data.data);
        let max = Math.max(...data.data);

        for (let x = 0; x < data.width; x++) {
            for (let y = 0; y < data.height; y++) {
                let percent = (min == max) ? 1 : (data.data[index] - min) / (max - min);
                let color = Util.newColor(this.colorEmpty, this.colorFull, percent);
                component.set(x, y, color, false);
                index++;
            }
        }
        component.drawGrid();
    }

    public render() {

        this.setFor(this.inputs, this.inputData.inputsGrid);
        this.setFor(this.weights1, this.inputData.weights1Grid);
        this.setFor(this.hidden, this.inputData.hiddenGrid);
        this.setFor(this.weights2, this.inputData.weights2Grid);
        this.setFor(this.outputs, this.inputData.outputGrid);

        this.inputs.drawGrid();
        this.weights1.drawGrid();
        this.hidden.drawGrid();
        this.weights2.drawGrid();
        this.outputs.drawGrid();
    }



}