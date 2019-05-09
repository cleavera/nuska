import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypeSelectorComponent } from './components/type-selector/type-selector.component';
import { ValueInputComponent } from './components/value-input/value-input.component';
import { ValuesComponent } from './components/values/values.component';

@NgModule({
    declarations: [
        TypeSelectorComponent,
        ValueInputComponent,
        ValuesComponent
    ],
    exports: [
        TypeSelectorComponent,
        ValuesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DataModule {}
