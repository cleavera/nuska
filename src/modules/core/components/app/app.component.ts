import { Component } from '@angular/core';

@Component({
    selector: 'ui-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public values: Array<number> = [2, 1, 3];

    public onValuesChange(values: Array<number>): void {
        this.values = values;
    }
}
