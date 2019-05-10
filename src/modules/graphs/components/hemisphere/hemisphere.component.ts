import { Component, Input, OnChanges } from '@angular/core';
import { Angle } from '../../classes/angle';
import { IPath } from '../../interfaces/path.interface';
import { PieChartService } from '../../services/pie-chart.service';

@Component({
    selector: 'graph-hemisphere',
    styleUrls: ['./hemisphere.component.scss'],
    templateUrl: './hemisphere.component.html'
})
export class HemisphereComponent implements OnChanges {
    @Input()
    public values!: Array<number>;

    @Input()
    public cutoutPercentage: number = 0;

    public paths!: Array<IPath>;

    private _pieChartService: PieChartService;

    constructor(pieChartService: PieChartService) {
        this._pieChartService = pieChartService;
    }

    public ngOnChanges(): void {
        this._reDraw();
    }

    private _reDraw(): void {
        this.paths = this._pieChartService.generatePaths(this.values, this.cutoutPercentage, Angle.FromTurns(0.75), Angle.FromTurns(0.5));
    }
}
