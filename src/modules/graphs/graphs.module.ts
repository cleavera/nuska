import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PieChartSegmentComponent } from './components/pie-chart-segment/pie-chart-segment.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
    exports: [
        PieChartComponent
    ],
    imports: [
        CommonModule
    ],
    declarations: [
        PieChartComponent,
        PieChartSegmentComponent
    ]
})
export class GraphsModule {}
