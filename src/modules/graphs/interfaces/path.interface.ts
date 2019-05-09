import { ICoordinate } from './coordinate.interface';

export interface IPath {
    start: ICoordinate;
    end: ICoordinate;
    angle: number;
}
