import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CutoutComponent } from './components/cutout/cutout.component';
import { RotationComponent } from './components/rotation/rotation.component';
import { RoundedCapsComponent } from './components/rounded-caps/rounded-caps.component';
import { TotalGraphAngleComponent } from './components/total-graph-angle/total-graph-angle.component';
import { TypeSelectorComponent } from './components/type-selector/type-selector.component';
import { ValueInputComponent } from './components/value-input/value-input.component';
import { ValuesComponent } from './components/values/values.component';

@NgModule({
    declarations: [
        CutoutComponent,
        RotationComponent,
        RoundedCapsComponent,
        TotalGraphAngleComponent,
        TypeSelectorComponent,
        ValueInputComponent,
        ValuesComponent
    ],
    exports: [
        CutoutComponent,
        RotationComponent,
        RoundedCapsComponent,
        TotalGraphAngleComponent,
        TypeSelectorComponent,
        ValuesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DataModule {}
