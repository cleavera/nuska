import { Component, Input } from '@angular/core';
import { IOption } from '../../interfaces/option.interface';

@Component({
    selector: 'data-type-selector',
    templateUrl: './type-selector.component.html'
})
export class TypeSelectorComponent {
    @Input()
    public types!: Array<IOption>;
}
