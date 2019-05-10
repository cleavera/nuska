import { ICoordinate } from './coordinate.interface';
import { IPathPart } from './path-part.interface';

export interface IPath {
    start: ICoordinate;
    parts: Array<IPathPart>;
}
