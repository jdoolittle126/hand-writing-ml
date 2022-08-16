import {
    Component,
    Input,
    AfterViewInit,
    Output,
    EventEmitter,
    ViewChildren,
    QueryList
} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {InputComponent} from "../input/input.component";

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements AfterViewInit {

    @ViewChildren(InputComponent) components: QueryList<InputComponent>;

    @Input() public trials: number = 1;
    @Input() public data: {character: string, input: Array<{smoothImage: ImageData, pixelImage: ImageData}>} = null;

    @Output() isAdded = new EventEmitter<{character: string, input: Array<{smoothImage: ImageData, pixelImage: ImageData}>}>();

    public samples: Array<number>;
    public locked: boolean;

    charForm = new FormGroup({
        selectedChar: new FormControl('', Validators.nullValidator && Validators.required),
    });


    ngOnInit() {
        this.samples = Array.from(Array(this.trials),(x,i)=>i);

        if (this.data != null) {
            this.locked = true;
            this.charForm.setValue({'selectedChar': this.data.character});
        } else {
            this.locked = false;
        }
    }

    ngAfterViewInit() {

    }

    private reset() {
        this.clear();
        this.charForm.reset();
    }

    public clear() {
        this.components.forEach(item => item.clear())
    }

    public onAdd() {
        if (!this.charForm.valid) {
            return;
        }

        let character = this.charForm.value.selectedChar;
        let outputs: Array<{smoothImage: ImageData, pixelImage: ImageData}> = [];
        this.components.forEach(item => {
            item.getViewData(({smoothImage, pixelImage}) => {
                let output = {smoothImage: smoothImage, pixelImage: pixelImage};
                outputs.push(output);
                this.reset();
                if (outputs.length == this.components.length) {
                    console.log(this.charForm.value.selectedChar)
                    this.isAdded.emit({character: character, input: outputs})
                }
            });
        });
    }
}
