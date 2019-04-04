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
    this.messageService.add('HeroService: feched heroes');
    return of(HEROES);
  
  }
}
