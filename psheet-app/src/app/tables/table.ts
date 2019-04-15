export class Table {
    dieSize: number;
    constructor(
        public readonly name: string,
        public readonly rows: Row[]) {
        //identify die size
        this.dieSize = 0;
        rows.forEach(r => {
            this.dieSize = Math.max(this.dieSize, r.roll);
        });
    }
    roll(): Row  {
        let result:number = Math.floor(Math.random() * this.dieSize) + 1;
        let resultValue: Row = null;
        this.rows.some(r => {
            if (result <= r.roll) {
                resultValue = r;
                return true;
            }
        });
        return resultValue;
    }
}
export class Row {
    constructor(public roll: number, public value: string, public detail: string)
    { }
}
