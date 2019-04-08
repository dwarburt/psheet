import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.get(id)
      .subscribe(hero => this.hero = hero);
  }
  private nuke(hero: Hero) {
    this.heroService.delete(hero);
    this.router.navigate(["/"]);
  }
}
