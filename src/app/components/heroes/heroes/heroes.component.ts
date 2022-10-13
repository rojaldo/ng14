import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  heroName = '';
  heroDescription = '';

  constructor(private service: HeroesService) { }

  invalidForm(): boolean {
    return (this.heroName.trim() === '');
  }

  addHero(): void {
    if (this.heroName.trim().length === 0) {
      return;
    }
    this.service.addHero(new Hero(this.heroName, this.heroDescription));
    this.heroName = '';
  }

  removeHero(i: number): void {
    this.service.removeHero(i);
  }

  ngOnInit(): void {
    this.service.heroes$.subscribe(myHeroes => this.heroes = myHeroes);
  }

}
