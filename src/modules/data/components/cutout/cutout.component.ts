import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'data-cutout',
    templateUrl: './cutout.component.html',
    styleUrls: ['./cutout.component.scss']
})
export class CutoutComponent {
    @Input()
    public cutout!: number;

    @Output()
    public cutoutChange: EventEmitter<number> = new EventEmitter<number>();

    public get cutoutPercentage(): number {
        return Math.floor(this.cutout * 100);
    }

    public onCutoutChange(value: string): void {
        this.cutoutChange.emit(Number(value));
    }
}
