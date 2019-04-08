import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService: MessageService) {
    this.loadHeros();
   }
  
  private HeroDb : Hero[] = null;

  private loadHeros(): void {
    var heroString: string = localStorage.getItem("my_heroes");
    if (heroString && heroString[0] == '[') {
      this.HeroDb = JSON.parse(heroString);
    } else {
      this.HeroDb = [];
    }
  }
  
  getAll() : Observable<Hero[]> {
    return of(this.HeroDb);
  }
  get(id: number) : Observable<Hero> {
    return of(this.HeroDb.find(hero => hero.id === id));
  }
  save(hero: Hero) : void {
    if (hero.id) {
      this.HeroDb = this.HeroDb.filter( h => h.id != hero.id);
    } else {
      hero.id = Math.max(...this.HeroDb.map(o => o.id), 0) + 1;
    }
    this.HeroDb.push(hero);
    this.saveDb();
  }
  delete(hero: Hero): void {
    if (hero.id) {
      this.HeroDb = this.HeroDb.filter(h => h.id != hero.id);
      this.saveDb();
    }
  }
  private saveDb(): void {
    localStorage.setItem("my_heroes", JSON.stringify(this.HeroDb));
  }
}
