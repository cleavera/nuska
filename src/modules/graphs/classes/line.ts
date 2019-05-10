import { ICoordinate } from '../interfaces/coordinate.interface';
import { IPathPart } from '../interfaces/path-part.interface';

export class Line implements IPathPart {
    public end: ICoordinate;

    constructor(end: ICoordinate) {
        this.end = end;
    }

    public toPathPartDeclaration(): string {
        return `L ${this.end.x} ${this.end.y}`;
    }
}
