import { Component, Input, OnChanges } from '@angular/core';
import { Angle } from '../../classes/angle';
import { Arc } from '../../classes/arc';
import { Line } from '../../classes/line';
import { IPath } from '../../interfaces/path.interface';

@Component({
    selector: 'graph-hemisphere',
    styleUrls: ['./hemisphere.component.scss'],
    templateUrl: './hemisphere.component.html'
})
export class HemisphereComponent implements OnChanges {
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

        let startingAngle: Angle = Angle.FromTurns(0.75);

        let valueSum: number = 0;

        this.paths = this.values.map((value: number): IPath => {
            valueSum += value;

            const endingAngle: Angle = Angle.FromTurns(0.75).subtract(Angle.FromTurns((valueSum / total) / 2));

            const outerArc: Arc = Arc.FromAngle(startingAngle, endingAngle);
            const innerArc: Arc = Arc.FromAngle(endingAngle, startingAngle, this.cutoutPercentage);

            const path: IPath = {
                start: outerArc.startPosition,
                parts: [
                    outerArc,
                    new Line(innerArc.startPosition),
                    innerArc
                ]
            };

            startingAngle = endingAngle;

            return path;
        });
    }
}
