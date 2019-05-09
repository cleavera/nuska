import { Component, ElementRef, Input } from '@angular/core';
import { IPath } from '../../interfaces/path.interface';

@Component({
    selector: '[graph-pie-chart-segment]',
    styleUrls: ['./pie-chart-segment.component.scss'],
    templateUrl: './pie-chart-segment.component.html'
})
export class PieChartSegmentComponent {
    @Input()
    public path!: IPath;

    constructor(element: ElementRef) {
        element.nativeElement.setAttribute('style', `--color: rgb(${this.colorPart()},${this.colorPart()},${this.colorPart()})`);
    }

    public isLongAngleCurve(): boolean {
        return this.path.angle > 0.5;
    }

    public generateTheD(): string {
        return `M ${this.path.start.x},${this.path.start.y} A 1 1 0 ${Number(this.isLongAngleCurve())} 1 ${this.path.end.x} ${this.path.end.y} L 0,0Z`;
    }

    private colorPart(): string {
        return Math.ceil(Math.random() * 255).toString(10);
    }
}
