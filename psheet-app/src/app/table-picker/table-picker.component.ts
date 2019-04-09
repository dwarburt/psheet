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
  public heroValue: string;
  public rollResult: string;
  
  @Input() hero: Hero;
  @Input() table: string;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroValue = (this.hero as any)[this.table];
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

}
