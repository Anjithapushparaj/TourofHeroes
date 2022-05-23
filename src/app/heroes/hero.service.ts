import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { HEROS } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  hero?:Hero;
  heroeslist?:Hero[] = HEROS;

  constructor() { }
  
  getHeroes():Observable<Hero[]>{
    return of(HEROS)
  }
  getHero(id:number):Observable<Hero>{
    return of(HEROS.find(h => h.id === id)!)
  }
}
