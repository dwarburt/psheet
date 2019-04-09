export class Table {
    dieSize: number;
    constructor(
        public readonly name: string,
        public readonly rows: Row[]) {
        //identify die size
        this.dieSize = 0;
        rows.forEach(r => {
            console.log("begin accumulation");

            this.dieSize = Math.max(this.dieSize, ...r.roll);
            console.log("Self.diesize increased to " + this.dieSize);
        });
    }
    roll(): Row  {
        let result:number = Math.floor(Math.random() * this.dieSize) + 1;
        let resultValue: Row = null;
        this.rows.forEach(r => {
            if (result >= r.roll[0] && result <= r.roll[1]) {
                resultValue = r;
            }
        });
        return resultValue;
    }
}
export class Row {
    constructor(public roll: Array<number>, public value: string, public detail: string)
    { }
}
