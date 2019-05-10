import { Component, Input, OnChanges } from '@angular/core';
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
export class PieChartComponent implements OnChanges {
    @Input()
    public values!: Array<number>;

    @Input()
    public cutoutPercentage: number = 0;

    public paths!: Array<IPath>;

    public ngOnChanges(): void {
        this._reDraw();
    }

    private _reDraw(): void {
        const total: number = this.values.reduce((a: number, b: number) => {
            return a + b;
        }, 0);

        let startPosition: ICoordinate = {
            x: 0,
            y: -1
        };

        let startingAngle: Angle = Angle.FromTurns(0.5);

        let valueSum: number = 0;

        this.paths = this.values.map((value: number): IPath => {
            valueSum += value;

            const endingAngle: Angle = Angle.FromTurns(0.5).subtract(Angle.FromTurns(valueSum / total));

            const outerArc: Arc = Arc.FromAngle(startingAngle, endingAngle);
            const innerArc: Arc = Arc.FromAngle(endingAngle, startingAngle, this.cutoutPercentage);

            const path: IPath = {
                start: startPosition,
                parts: [
                    outerArc,
                    new Line(innerArc.startPosition),
                    innerArc
                ]
            };

            startPosition = outerArc.endPosition;
            startingAngle = endingAngle;

            return path;
        });
    }
}
