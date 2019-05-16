import { Component } from '@angular/core';

@Component({
    selector: 'core-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
    public values: Array<number> = [2, 1, 3];
    public cutout: number = 0;
    public isRoundedCaps: boolean = false;

    public onValuesChange(values: Array<number>): void {
        this.values = values;
    }

    public onCutoutChange(cutout: number): void {
        this.cutout = cutout;
    }

    public onRoundedCapsChange(isRoundedCaps: boolean): void {
        this.isRoundedCaps = isRoundedCaps;
    }
}
