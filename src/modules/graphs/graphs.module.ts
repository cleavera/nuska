import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HemisphereComponent } from './components/hemisphere/hemisphere.component';
import { PathComponent } from './components/path/path.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
    exports: [
        HemisphereComponent,
        PieChartComponent
    ],
    imports: [
        CommonModule
    ],
    declarations: [
        HemisphereComponent,
        PathComponent,
        PieChartComponent
    ]
})
export class GraphsModule {
}
