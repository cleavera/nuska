import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOption } from '../../interfaces/option.interface';

@Component({
    selector: 'data-type-selector',
    templateUrl: './type-selector.component.html',
    styleUrls: ['./type-selector.component.scss']
})
export class TypeSelectorComponent {
    @Input()
    public types!: Array<IOption>;

    @Input()
    public selectedType!: string;

    @Output()
    public typeChange: EventEmitter<string> = new EventEmitter<string>();

    public onTypeChange(value: string): void {
        console.log(value);
        this.typeChange.emit(value);
    }
}
