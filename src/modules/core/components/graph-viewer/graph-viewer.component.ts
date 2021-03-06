import { Component } from '@angular/core';
import { IOption } from '../../../data';
import { HEMISPHERE, HORSESHOE, PIE_CHART } from '../../constants/graph-types.constant';

@Component({
    selector: 'core-graph-viewer',
    templateUrl: './graph-viewer.component.html',
    styleUrls: ['./graph-viewer.component.scss']
})
export class GraphViewerComponent {
    public readonly TYPES: Array<IOption> = [
        { id: PIE_CHART, value: 'Pie chart' },
        { id: HEMISPHERE, value: 'Hemisphere' },
        { id: HORSESHOE, value: 'Horseshoe' }
    ];

    public selectedChart: string = PIE_CHART;

    public onChartChange(chart: string): void {
        this.selectedChart = chart;
    }

    public isPieChartSelected(): boolean {
        return this.selectedChart === PIE_CHART;
    }

    public isHemisphereSelected(): boolean {
        return this.selectedChart === HEMISPHERE;
    }

    public isHorseshoeSelected(): boolean {
        return this.selectedChart === HORSESHOE;
    }
}
