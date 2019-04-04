import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './hero-db'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService: MessageService) { }
  
  getHeroes() : Observable<Hero[]> {
    return of(HEROES);
  }
  getHero(id: number) : Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }
}
