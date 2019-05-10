import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HemisphereComponent } from './components/hemisphere/hemisphere.component';
import { HorseshoeComponent } from './components/horseshoe/horseshoe.component';
import { PathComponent } from './components/path/path.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PieChartService } from './services/pie-chart.service';

@NgModule({
    exports: [
        HemisphereComponent,
        HorseshoeComponent,
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
        HorseshoeComponent,
        PathComponent,
        PieChartComponent
    ]
})
export class GraphsModule {
}
