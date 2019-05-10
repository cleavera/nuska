import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'data-rotation',
    templateUrl: './rotation.component.html',
    styleUrls: ['./rotation.component.scss']
})
export class RotationComponent {
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
