export class Table {
    dieSize: number;
    constructor(
        public readonly name: string,
        public readonly rows: Row[]) {
        //identify die size
        rows.forEach(r => {
            this.dieSize = Math.max(this.dieSize, ...r.roll);
        });
    }
    roll(): Row  {
        let result:number = Math.floor(Math.random() * this.dieSize) + 1;
        this.rows.forEach(r => {
            if (result >= r.roll[0] && result <= r.roll[1]) {
                return r;
            }
        });
        return null;
    }
}
export class Row {
    constructor(public roll: Array<number>, public value: string, public detail: string)
    { }
}
