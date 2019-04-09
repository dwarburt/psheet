import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { TableList } from '../tables/table-list'
import { Table } from '../tables/table';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-table-picker',
  templateUrl: './table-picker.component.html',
  styleUrls: ['./table-picker.component.css']
})
export class TablePickerComponent implements OnInit {
  @Input() hero: Hero;
  @Input() table: string;
  value(): string {
    if (this.hasValue()) {
      return this.heroValue;
    }
    return "Unchosen";
  }
  hasValue(): boolean {
    let retval = this.heroValue;
    return retval != null && retval.match(/[^\s]/) != null;
  }
  choose(): void {
    var tableData: Table = TableList[this.table];
    var result = tableData.roll();
    this.heroValue = result.value;
    this.hero[this.table] = this.heroValue;
    this.heroService.save(this.hero);
  }
  constructor(private heroService: HeroService) { }
  public heroValue: string;
  ngOnInit() {
    this.heroValue = (this.hero as any)[this.table];
  }

}
