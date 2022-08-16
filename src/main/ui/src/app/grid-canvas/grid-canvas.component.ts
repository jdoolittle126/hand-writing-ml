import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'grid-canvas',
    templateUrl: 'grid-canvas.component.html',
    styleUrls: ['./grid-canvas.component.css']
})

// TODO Add to module!
export class GridCanvasComponent implements AfterViewInit {

    @ViewChild('myCanvas') public canvas: ElementRef;

    @Input() public cellSize: number = 10;
    @Input() public borderSize: number = 1;
    @Input() public gridHeight: number = 5;
    @Input() public gridWidth: number = 5;

    private canvasCx: CanvasRenderingContext2D;
    private canvasEl: HTMLCanvasElement;

    private grid: string[][];
    private gridColor: string = 'black';

    ngAfterViewInit() {
        this.canvasEl = this.canvas.nativeElement;
        this.canvasCx = this.canvasEl.getContext('2d');

        this.canvasCx.fillStyle = this.gridColor;
        this.canvasCx.strokeStyle = this.gridColor;

        this.canvasEl.width = (this.cellSize + this.borderSize) * this.gridWidth + (this.borderSize * 2);
        this.canvasEl.height = (this.cellSize + this.borderSize) * this.gridHeight + (this.borderSize * 2);
        this.clear();
    }

    public clear() {
        this.grid = Array.from({ length:this.gridWidth }, () => (Array.from({ length:this.gridHeight }, ()=> '')));
        this.drawGrid();
    }

    public set(x: number, y: number, color: string, draw: boolean = true) {
        if (this.grid && typeof this.grid[x][y] !== 'undefined') {
            this.grid[x][y] = color;
            if (draw) {
                this.drawGrid();
            }
        }
    }

    public drawGrid(xStart: number = 0, yStart: number = 0) {
        this.canvasCx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        let size = this.borderSize + this.cellSize;

        for (let x = 0; x <  this.gridWidth; x++) {
            for (let y = 0; y < this.gridHeight; y++) {
                let cX = xStart + (x * this.cellSize);
                let cY = yStart + (y *  this.cellSize);
                this.canvasCx.fillStyle = this.gridColor;
                this.canvasCx.strokeStyle = this.gridColor;
                this.canvasCx.fillRect(cX, cY, size, size);

                let color = (this.grid && typeof this.grid[x][y] !== 'undefined' && this.grid[x][y] !== '') ? this.grid[x][y] : 'NONE';

                if (color == 'NONE') {
                    this.canvasCx.clearRect(cX + this.borderSize, cY +  this.borderSize, this.cellSize - this.borderSize , this.cellSize - this.borderSize);
                } else {
                    this.canvasCx.fillStyle = color
                    this.canvasCx.strokeStyle = color
                    this.canvasCx.fillRect(cX + this.borderSize, cY +  this.borderSize, this.cellSize - this.borderSize , this.cellSize - this.borderSize);
                }

            }
        }

    }


}