import { Component, Input } from '@angular/core';
import { Angle } from '../../classes/angle';
import { Arc } from '../../classes/arc';
import { Line } from '../../classes/line';
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

        let startingAngle: Angle = Angle.FromTurns(0);

        let valueSum: number = 0;

        this.paths = values.map((value: number): IPath => {
            valueSum += value;

            const endingAngle: Angle = Angle.FromTurns(0.5).subtract(Angle.FromTurns(valueSum / total));

            const arc: Arc = Arc.FromAngle(startingAngle, endingAngle);

            const path: IPath = {
                start: startPosition,
                parts: [
                    arc,
                    new Line({ x: 0, y: 0 })
                ]
            };

            startPosition = arc.endPosition;
            startingAngle = endingAngle;

            return path;
        });
    }

    public paths!: Array<IPath>;
}
