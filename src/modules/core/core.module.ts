import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataModule } from '../data';
import { GraphsModule } from '../graphs';
import { AppComponent } from './components/app/app.component';
import { GraphViewerComponent } from './components/graph-viewer/graph-viewer.component';
import { HemisphereComponent } from './components/hemisphere/hemisphere.component';
import { HorseshoeComponent } from './components/horseshoe/horseshoe.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
    declarations: [
        AppComponent,
        GraphViewerComponent,
        HemisphereComponent,
        HorseshoeComponent,
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
