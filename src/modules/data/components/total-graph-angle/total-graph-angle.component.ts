import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'data-total-graph-angle',
    templateUrl: './total-graph-angle.component.html',
    styleUrls: ['./total-graph-angle.component.scss']
})
export class TotalGraphAngleComponent {
    @Input()
    public angle!: number;

    @Output()
    public angleChange: EventEmitter<number> = new EventEmitter<number>();

    public get angleDegrees(): number {
        return Math.floor(this.angle * 360);
    }

    public onAngleChange(value: string): void {
        this.angleChange.emit(Number(value));
    }
}
