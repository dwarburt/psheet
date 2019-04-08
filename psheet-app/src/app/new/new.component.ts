import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private heroService : HeroService,
    private router: Router) { }

  ngOnInit() {
  }
  add(name: string) : void {
    this.heroService.save( { name } as Hero );
    this.router.navigate(["/heroes"]);
  }
}
