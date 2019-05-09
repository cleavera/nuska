import { Component, Input } from '@angular/core';
import { ICoordinate } from '../../interfaces/coordinate.interface';
import { IPath } from '../../interfaces/path.interface';

@Component({
    selector: 'graph-pie-chart',
    styleUrls: ['./pie-chart.component.scss'],
    templateUrl: './pie-chart.component.html'
})
export class PieChartComponent {
    @Input()
    public set values(values: Array<number>) {
        const total: number = values.reduce((a: number, b: number) => {
            return a + b;
        }, 0);

        let startPosition: ICoordinate = {
            x: 0,
            y: -1
        };

        let valueSum: number = 0;

        this.paths = values.map((value: number): IPath => {
            valueSum += value;

            const angle: number = (valueSum / total) * 2 * Math.PI;
            const adjustedAngle: number = Math.PI - angle;

            const x: number = Math.floor(Math.sin(adjustedAngle) * 1000) / 1000;
            const y: number = Math.floor(Math.cos(adjustedAngle) * 1000) / 1000;

            const path: IPath = {
                start: startPosition,
                end: {
                    x,
                    y
                },
                angle: value / total
            };

            startPosition = path.end;

            return path;
        });
    }

    public paths!: Array<IPath>;
}
