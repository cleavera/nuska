import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HemisphereComponent } from './components/hemisphere/hemisphere.component';
import { PathComponent } from './components/path/path.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PieChartService } from './services/pie-chart.service';

@NgModule({
    exports: [
        HemisphereComponent,
        PieChartComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        PieChartService
    ],
    declarations: [
        HemisphereComponent,
        PathComponent,
        PieChartComponent
    ]
})
export class GraphsModule {
}
