import { Component, Input, OnChanges } from '@angular/core';
import { Angle } from '../../classes/angle';
import { IPath } from '../../interfaces/path.interface';
import { PieChartService } from '../../services/pie-chart.service';

@Component({
    selector: 'graph-horseshoe',
    styleUrls: ['./horseshoe.component.scss'],
    templateUrl: './horseshoe.component.html'
})
export class HorseshoeComponent implements OnChanges {
    @Input()
    public values!: Array<number>;

    @Input()
    public cutoutPercentage: number = 0;

    @Input()
    public totalHorseshoeAngle: number = 0.8;

    public paths!: Array<IPath>;

    private _pieChartService: PieChartService;

    constructor(pieChartService: PieChartService) {
        this._pieChartService = pieChartService;
    }

    public ngOnChanges(): void {
        this._reDraw();
    }

    private _reDraw(): void {
        const rotationOffset: Angle = Angle.FromTurns(0.5 - ((1 - this.totalHorseshoeAngle) / 2));

        this.paths = this._pieChartService.generatePaths(this.values, this.cutoutPercentage, rotationOffset, Angle.FromTurns(this.totalHorseshoeAngle));
    }
}
