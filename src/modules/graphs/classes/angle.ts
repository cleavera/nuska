export class Angle {
    public turns: number;

    public get radians(): number {
        return this.turns * 2 * Math.PI;
    }

    public get degrees(): number {
        return this.turns * 360;
    }

    private constructor(turns: number) {
        this.turns = turns;
    }

    public static FromTurns(turns: number): Angle {
        return new Angle(turns);
    }

    public isReflex(): boolean {
        return Math.abs(this.turns) > 0.5;
    }

    public add(angle: Angle): Angle {
        return Angle.FromTurns(this.turns + angle.turns);
    }

    public subtract(angle: Angle): Angle {
        return Angle.FromTurns(this.turns - angle.turns);
    }
}
