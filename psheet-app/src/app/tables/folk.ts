import { Table, Row } from './table';

let FolkTable: Table = new Table("Folk", [
    new Row(90, "Human", "The most prevalent folk"),
    new Row(95, "Kúzhai", "Slightly short and stout dwarves"),
    new Row(96, "Ænarin", "Half-elven"),
    new Row(99, "Sinái", "Elves of the isle Harn"),
    new Row(100, "Sidhé", "Elder elves")
]);

export default FolkTable;