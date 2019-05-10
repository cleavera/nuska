import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PathComponent } from './components/path/path.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
    exports: [
        PieChartComponent
    ],
    imports: [
        CommonModule
    ],
    declarations: [
        PathComponent,
        PieChartComponent
    ]
})
export class GraphsModule {
}
