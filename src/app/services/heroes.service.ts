import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _heroes: Hero[] = [new Hero('Windstorm', 'Random hero'), new Hero('Bombasto', 'Random hero'), new Hero('Magneta', 'Random hero'), new Hero('Tornado', 'Random hero')];
  heroes$ = new BehaviorSubject<Hero[]>(this.heroes);

  constructor() { }

  get heroes(): Hero[] {
    // return a copy of the array
    return this._heroes.slice();
  }

  addHero(hero: Hero): void {
    this._heroes.push(hero);
    // slice() returns a copy of the array
    this.heroes$.next(this.heroes.slice());
  }

  removeHero(i: number): void {
    // check range of i
    if (i >= 0 && i < this._heroes.length) {
      this._heroes.splice(i, 1);
      this.heroes$.next(this.heroes.slice());
    }
    else {
      throw new Error("Invalid index");
    }
  }
}
