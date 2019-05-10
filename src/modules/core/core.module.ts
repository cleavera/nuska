import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataModule } from '../data';
import { GraphsModule } from '../graphs';
import { AppComponent } from './components/app/app.component';
import { GraphViewerComponent } from './components/graph-viewer/graph-viewer.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
    declarations: [
        AppComponent,
        GraphViewerComponent,
        PieChartComponent
    ],
    imports: [
        BrowserModule,
        DataModule,
        GraphsModule
    ],
    bootstrap: [AppComponent]
})
export class CoreModule {}
