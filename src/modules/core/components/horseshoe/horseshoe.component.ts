import { Component } from '@angular/core';

@Component({
    selector: 'core-horseshoe',
    templateUrl: './horseshoe.component.html',
    styleUrls: ['./horseshoe.component.scss']
})
export class HorseshoeComponent {
    public values: Array<number> = [2, 1, 3];
    public cutout: number = 0.8;
    public angle: number = 0.8;
    public rotation: number = 0.5;
    public isRoundedCaps: boolean = false;

    public onValuesChange(values: Array<number>): void {
        this.values = values;
    }

    public onCutoutChange(cutout: number): void {
        this.cutout = cutout;
    }

    public onAngleChange(angle: number): void {
        this.angle = angle;
    }

    public onRotationChange(angle: number): void {
        this.rotation = angle;
    }

    public onRoundedCapsChange(isRoundedCaps: boolean): void {
        this.isRoundedCaps = isRoundedCaps;
    }
}
