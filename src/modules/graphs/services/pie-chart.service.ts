import { Injectable } from '@angular/core';
import { Angle } from '../classes/angle';
import { Arc } from '../classes/arc';
import { Line } from '../classes/line';
import { IPath } from '../interfaces/path.interface';

@Injectable()
export class PieChartService {
    public generatePaths(values: Array<number>, cutoutPercentage: number, rotation: Angle, totalAngle: Angle): Array<IPath> {
        const total: number = values.reduce((a: number, b: number) => {
            return a + b;
        }, 0);

        let startingAngle: Angle = rotation;

        let valueSum: number = 0;

        return values.map((value: number): IPath => {
            valueSum += value;

            const endingAngle: Angle = rotation.subtract(Angle.FromTurns((valueSum / total) * totalAngle.turns));

            const outerArc: Arc = Arc.FromAngle(startingAngle, endingAngle);
            const innerArc: Arc = Arc.FromAngle(endingAngle, startingAngle, cutoutPercentage);

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
