import { Injectable } from '@angular/core';
import { Angle } from '../classes/angle';
import { Arc } from '../classes/arc';
import { Line } from '../classes/line';
import { ICoordinate } from '../interfaces/coordinate.interface';
import { IPathPart } from '../interfaces/path-part.interface';
import { IPath } from '../interfaces/path.interface';

@Injectable()
export class PieChartService {
    public generatePaths(values: Array<number>, cutoutPercentage: number, rotation: Angle, totalAngle: Angle, roundedCaps: boolean = false, invertStartCap: boolean = false): Array<IPath> {
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

            const capRadius: number = (1 - cutoutPercentage) / 2;

            const path: IPath = {
                start: outerArc.startPosition,
                parts: [
                    outerArc,
                    this._generateCap(outerArc.endPosition, innerArc.startPosition, roundedCaps, capRadius),
                    innerArc,
                    this._generateCap(innerArc.endPosition, outerArc.startPosition, roundedCaps, capRadius, invertStartCap)
                ]
            };

            startingAngle = endingAngle;

            return path;
        });
    }

    private _generateCap(start: ICoordinate, end: ICoordinate, roundedCaps: boolean, capRadius: number, isAntiClockwise: boolean = true): IPathPart {
        if (roundedCaps) {
            return new Arc(capRadius, false, isAntiClockwise, end, start);
        }

        return new Line(end);
    }
}
