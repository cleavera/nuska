import { Component } from '@angular/core';

@Component({
    selector: 'core-hemisphere',
    templateUrl: './hemisphere.component.html',
    styleUrls: ['./hemisphere.component.scss']
})
export class HemisphereComponent {
    public values: Array<number> = [2, 1];
    public cutout: number = 0;

    public onValuesChange(values: Array<number>): void {
        this.values = values;
    }

    public onCutoutChange(cutout: number): void {
        this.cutout = cutout;
    }
}
