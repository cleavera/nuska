import { ICoordinate } from '../interfaces/coordinate.interface';
import { IPathPart } from '../interfaces/path-part.interface';
import { Angle } from './angle';

export class Arc implements IPathPart {
    public radius: number;
    public isLargeAngle: boolean;
    public endPosition: ICoordinate;

    constructor(radius: number, isLargeAngle: boolean, endPosition: ICoordinate) {
        this.radius = radius;
        this.isLargeAngle = isLargeAngle;
        this.endPosition = endPosition;
    }

    public static FromAngle(startingAngle: Angle, endingAngle: Angle, radius: number = 1): Arc {
        const angleMoved: Angle = endingAngle.subtract(startingAngle);

        const x: number = Math.floor(Math.sin(endingAngle.radians) * 1000) / 1000;
        const y: number = Math.floor(Math.cos(endingAngle.radians) * 1000) / 1000;

        return new Arc(radius, angleMoved.isReflex(), { x, y });
    }

    public toPathPartDeclaration(): string {
        return `A ${this.radius} ${this.radius} 0 ${Number(this.isLargeAngle)} 1 ${this.endPosition.x} ${this.endPosition.y}`;
    }
}
