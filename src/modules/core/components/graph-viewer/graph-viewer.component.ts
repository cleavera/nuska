import { Component } from '@angular/core';

@Component({
    selector: 'core-graph-viewer',
    templateUrl: './graph-viewer.component.html',
    styleUrls: ['./graph-viewer.component.scss']
})
export class GraphViewerComponent {
    public values: Array<number> = [2, 1, 3];

    public onValuesChange(values: Array<number>): void {
        this.values = values;
    }
}
