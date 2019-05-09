import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GraphsModule } from '../graphs';
import { AppComponent } from './components/app/app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GraphsModule
    ],
    bootstrap: [AppComponent]
})
export class CoreModule {}
