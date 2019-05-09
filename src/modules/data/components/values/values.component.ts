import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'data-values',
    templateUrl: './values.component.html',
    styleUrls: ['./values.component.scss']
})
export class ValuesComponent {
    @Input()
    public values!: Array<number>;

    @Output()
    public valuesChanges: EventEmitter<Array<number>> = new EventEmitter<Array<number>>();

    public onValueChange(value: number, index: number): void {
        this.values[index] = value;
        this.valuesChanges.emit(this.values.slice());
    }

    public onValueRemove(i: number): void {
        this.values.splice(i, 1);
        this.valuesChanges.emit(this.values.slice());
    }

    public onAddValue(): void {
        this.values.push(0);
    }
}
