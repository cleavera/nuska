import { Component, ElementRef, Input } from '@angular/core';
import { IPathPart } from '../../interfaces/path-part.interface';
import { IPath } from '../../interfaces/path.interface';

@Component({
    selector: '[graph-path]',
    templateUrl: './path.component.html',
    styleUrls: ['./path.component.scss']
})
export class PathComponent {
    @Input()
    public path!: IPath;

    constructor(element: ElementRef) {
        element.nativeElement.setAttribute('style', `--color: rgb(${this.colorPart()},${this.colorPart()},${this.colorPart()})`);
    }

    public generateTheD(): string {
        const theD: string = `M ${this.path.start.x},${this.path.start.y}`;

        return this.path.parts.reduce((declaration: string, pathPart: IPathPart): string => {
            return `${declaration} ${pathPart.toPathPartDeclaration()}`;
        }, theD) + 'Z';
    }

    private colorPart(): string {
        return Math.ceil(Math.random() * 255).toString(10);
    }
}
