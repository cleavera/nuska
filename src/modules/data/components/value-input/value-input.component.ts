import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'data-value-input',
    templateUrl: './value-input.component.html'
})
export class ValueInputComponent {
    @Input()
    public value!: number;

    @Output()
    public valueChange: EventEmitter<number> = new EventEmitter<number>();

    public onValueChange(value: string): void {
        this.valueChange.emit(Number(value));
    }
}
