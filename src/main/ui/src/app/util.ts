import {ModelConfiguration} from "./models/ModelConfiguration";

export class Util {

    public static getPixelData(pixelImageData: ImageData): Array<boolean> {
        let results: Array<boolean> = [];
        const { data } = pixelImageData;


        for (let x = 0; x < ModelConfiguration.PIXEL_GRID_WIDTH; x++) {
            for (let y = 0; y < ModelConfiguration.PIXEL_GRID_HEIGHT; y++) {
                let index = 4 * (ModelConfiguration.PIXEL_GRID_WIDTH * y + x);
                let isFilled: boolean = !((data[index] + data[index + 1] + data[index + 2]) > 0);
                results.push(isFilled);
            }
        }
        return results;
    }

    public static newColor(colorStart: string, colorEnd: string, mix: number){
        let hexStart = this.hexToRgb(colorStart);
        let hexEnd = this.hexToRgb(colorEnd);


        let newRgb = [
            Math.ceil(((1 - mix) * hexStart.r) + (mix * hexEnd.r)),
            Math.ceil(((1 - mix) * hexStart.g) + (mix * hexEnd.g)),
            Math.ceil(((1 - mix) * hexStart.b) + (mix * hexEnd.b))
        ];


        return this.rgbToHex(newRgb[0], newRgb[1], newRgb[2]);
    }

    public static toHex(c: number) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    public static hexToRgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    public static rgbToHex(r, g, b) {
        return "#" + this.toHex(r) + this.toHex(g) + this.toHex(b);
    }

}