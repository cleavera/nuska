import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'data-rounded-caps',
    templateUrl: './rounded-caps.component.html',
    styleUrls: ['./rounded-caps.component.scss']
})
export class RoundedCapsComponent {
    @Input()
    public isChecked: boolean = false;

    @Output()
    public inputChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    public onInputChange(value: boolean): void {
        this.inputChange.emit(value);
    }
}
