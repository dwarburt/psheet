import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-table-picker',
  templateUrl: './table-picker.component.html',
  styleUrls: ['./table-picker.component.css']
})
export class TablePickerComponent implements OnInit {
  @Input() hero: Hero;
  @Input() table: string;
  value(): string {
    let retval =  (this.hero as any)[this.table];
    if (retval === undefined || retval === null || retval === "") {
      return "Unknown";
    }
    return retval;
  }
  constructor() { }

  ngOnInit() {
  }

}
