import {
    Component, Input, ElementRef, AfterViewInit, ViewChild, Output, EventEmitter
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'
import {document} from "ngx-bootstrap";
import {ModelConfiguration} from "../models/ModelConfiguration";

/*
 This code is based on https://medium.com/@tarik.nzl/creating-a-canvas-component-with-free-hand-drawing-with-rxjs-and-angular-61279f577415!
 */

@Component({
    selector: 'input-canvas',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})

export class InputComponent implements AfterViewInit {

    @ViewChild('smoothCanvas') public smoothCanvas: ElementRef;
    @ViewChild('pixelCanvas') public pixelCanvas: ElementRef;

    @Input() public width = 100;
    @Input() public height = 100;
    @Input() public data: {smoothImage: ImageData, pixelImage: ImageData} = null;

    @Output() isAdded = new EventEmitter<{smoothImage: ImageData, pixelImage: ImageData}>();

    public locked: boolean;
    public isHovering = false;

    private smoothCx: CanvasRenderingContext2D;
    private smoothCanvasEl: HTMLCanvasElement;

    private pixelCx: CanvasRenderingContext2D;
    private pixelCanvasEl: HTMLCanvasElement;

    ngOnInit() {
        this.locked = this.data != null
    }

    public ngAfterViewInit() {
        this.smoothCanvasEl = this.smoothCanvas.nativeElement;
        this.smoothCx = this.smoothCanvasEl.getContext('2d');

        this.pixelCanvasEl = this.pixelCanvas.nativeElement;
        this.pixelCx = this.pixelCanvasEl.getContext('2d');

        this.smoothCanvasEl.width = this.width;
        this.smoothCanvasEl.height = this.height;

        this.pixelCanvasEl.width = this.width;
        this.pixelCanvasEl.height = this.height;

        this.smoothCx.lineWidth = 15;
        this.smoothCx.lineCap = 'round';
        this.smoothCx.strokeStyle = '#000';

        this.smoothCx.imageSmoothingEnabled = false;
        this.pixelCx.imageSmoothingEnabled = false;

        this.captureEvents(this.smoothCanvasEl);

        if (this.locked) {
            this.loadImage(this.data.smoothImage, this.data.pixelImage);
        }
    }

    private static cropImageFromCanvas(ctx) {
        let canvas = ctx.canvas,
            w = canvas.width, h = canvas.height,
            pix = {x:[], y:[]},
            imageData = ctx.getImageData(0,0,canvas.width,canvas.height),
            x, y, index;

        for (y = 0; y < h; y++) {
            for (x = 0; x < w; x++) {
                index = (y * w + x) * 4;
                if (imageData.data[index + 3] > 0) {
                    pix.x.push(x);
                    pix.y.push(y);
                }
            }
        }
        pix.x.sort(function(a,b){return a-b});
        pix.y.sort(function(a,b){return a-b});
        let n = pix.x.length-1;

        w = 1 + pix.x[n] - pix.x[0];
        h = 1 + pix.y[n] - pix.y[0];
        let cut = ctx.getImageData(pix.x[0], pix.y[0], w, h);

        canvas.width = w;
        canvas.height = h;
        ctx.putImageData(cut, 0, 0);
    }

    public showPixel() {
        if (this.locked) {
            this.isHovering = true;
        }
    }

    public showSmooth() {
        if (this.locked) {
            this.isHovering = false;
        }
    }

    public loadImage(smoothData: ImageData, pixelData: ImageData) {
        this.smoothCx.putImageData(smoothData, 0, 0);
        InputComponent.cropImageFromCanvas(this.smoothCx);

        let renderCanvasEl: HTMLCanvasElement = document.createElement('canvas');
        renderCanvasEl.className = 'nn';
        renderCanvasEl.width = ModelConfiguration.PIXEL_GRID_WIDTH;
        renderCanvasEl.height = ModelConfiguration.PIXEL_GRID_HEIGHT;
        let context: CanvasRenderingContext2D = renderCanvasEl
            .getContext('2d');

        context.putImageData(pixelData, 0, 0);

        let sImage = new Image(ModelConfiguration.PIXEL_GRID_WIDTH, ModelConfiguration.PIXEL_GRID_HEIGHT);
        sImage.className = 'nn';
        sImage.src = renderCanvasEl.toDataURL();
        sImage.onload = () => {
            let nScaleX = this.smoothCanvasEl.width / ModelConfiguration.PIXEL_GRID_WIDTH;
            let nScaleY = this.smoothCanvasEl.height / ModelConfiguration.PIXEL_GRID_HEIGHT;
            this.pixelCx.scale(nScaleX, nScaleY);
            this.pixelCx.drawImage(renderCanvasEl, 0, 0)
            InputComponent.cropImageFromCanvas(this.pixelCx);
        };
    }

    public clear() {
        this.smoothCanvasEl.getContext('2d')
            .clearRect(0, 0, this.smoothCanvasEl.width, this.smoothCanvasEl.height);
    }

    public getBlankRenderCanvas(): {canvas: HTMLCanvasElement, context: CanvasRenderingContext2D} {
        let renderCanvasEl: HTMLCanvasElement = document.createElement('canvas');
        renderCanvasEl.className = 'nn';
        renderCanvasEl.width = this.width;
        renderCanvasEl.height = this.height;
        let context: CanvasRenderingContext2D = renderCanvasEl
            .getContext('2d');
        context.imageSmoothingEnabled = false;

        return {canvas: renderCanvasEl, context: context};
    }

    public getViewData(callback: ({smoothImage, pixelImage}) => void) {

        let {canvas, context} = this.getBlankRenderCanvas();
        context.putImageData(
            this.smoothCx.getImageData(0, 0, this.smoothCanvasEl.width, this.smoothCanvasEl.height),
            0, 0);
        InputComponent.cropImageFromCanvas(context);

        let smoothImageData = context.getImageData(0, 0, canvas.width, canvas.height);

        let oldWidth = canvas.width;
        let oldHeight = canvas.height;

        let image = new Image();
        image.className = 'nn';
        image.src = canvas.toDataURL();
        image.onload = () => {

            let {canvas, context} = this.getBlankRenderCanvas();

            canvas.width = ModelConfiguration.PIXEL_GRID_WIDTH;
            canvas.height = ModelConfiguration.PIXEL_GRID_HEIGHT;

            let scaleX = ModelConfiguration.PIXEL_GRID_WIDTH / oldWidth;
            let scaleY = ModelConfiguration.PIXEL_GRID_HEIGHT / oldHeight;
            context.scale(scaleX, scaleY);
            context.drawImage(image, 0, 0);

            let pixelImageData = context.getImageData(0, 0,  canvas.width,  canvas.height);

            const { data } = pixelImageData;
            const { length } = data;

            for (let i = 0; i < length; i += 4) {
                const a = data[i + 3];

                if ( a < ModelConfiguration.PIXEL_ALPHA_THRESHOLD) {
                    data[i + 0] = 255;
                    data[i + 1] = 255;
                    data[i + 2] = 255;
                    data[i + 3] = 255;

                } else {
                    data[i + 0] = 0;
                    data[i + 1] = 0;
                    data[i + 2] = 0;
                    data[i + 3] = 255;
                }
            }


            let output = {smoothImage: smoothImageData, pixelImage: pixelImageData}
            callback(output);
            this.clear();
        }
    }


    private captureEvents(canvasEl: HTMLCanvasElement) {
        fromEvent(canvasEl, 'mousedown')
            .pipe(
                switchMap((e) => {
                    return fromEvent(canvasEl, 'mousemove')
                        .pipe(
                            takeUntil(fromEvent(canvasEl, 'mouseup')),
                            takeUntil(fromEvent(canvasEl, 'mouseleave')),
                            pairwise()
                        )
                })
            )
            .subscribe((res: [MouseEvent, MouseEvent]) => {
                const rect = canvasEl.getBoundingClientRect();

                const prevPos = {
                    x: res[0].clientX - rect.left,
                    y: res[0].clientY - rect.top
                };

                const currentPos = {
                    x: res[1].clientX - rect.left,
                    y: res[1].clientY - rect.top
                };

                this.drawOnCanvas(prevPos, currentPos);
            });
    }

    private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
        if (!this.smoothCx || this.locked) { return; }

        this.smoothCx.beginPath();

        if (prevPos) {
            this.smoothCx.moveTo(prevPos.x, prevPos.y); // from
            this.smoothCx.lineTo(currentPos.x, currentPos.y);
            this.smoothCx.stroke();
        }
    }

}
