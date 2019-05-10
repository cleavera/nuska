import { ICoordinate } from '../interfaces/coordinate.interface';
import { IPathPart } from '../interfaces/path-part.interface';
import { Angle } from './angle';

export class Arc implements IPathPart {
    public radius: number;
    public isLargeAngle: boolean;
    public isAntiClockwise: boolean;
    public endPosition: ICoordinate;
    public startPosition: ICoordinate;

    constructor(radius: number, isLargeAngle: boolean, isAntiClockwise: boolean, endPosition: ICoordinate, startPosition: ICoordinate) {
        this.radius = radius;
        this.isLargeAngle = isLargeAngle;
        this.isAntiClockwise = isAntiClockwise;
        this.endPosition = endPosition;
        this.startPosition = startPosition;
    }

    public static FromAngle(startingAngle: Angle, endingAngle: Angle, radius: number = 1): Arc {
        const angleMoved: Angle = endingAngle.subtract(startingAngle);

        const startPosition: ICoordinate = {
            x: radius * Math.floor(Math.sin(startingAngle.radians) * 1000) / 1000,
            y: radius * Math.floor(Math.cos(startingAngle.radians) * 1000) / 1000
        };

        const endPosition: ICoordinate = {
            x: radius * Math.floor(Math.sin(endingAngle.radians) * 1000) / 1000,
            y: radius * Math.floor(Math.cos(endingAngle.radians) * 1000) / 1000
        };

        return new Arc(radius, angleMoved.isReflex(), angleMoved.isNegative(), endPosition, startPosition);
    }

    public toPathPartDeclaration(): string {
        return `A ${this.radius} ${this.radius} 0 ${Number(this.isLargeAngle)} ${Number(this.isAntiClockwise)} ${this.endPosition.x} ${this.endPosition.y}`;
    }
}
