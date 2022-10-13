import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  heroName = '';

  invalidForm(): boolean {
    return (this.heroName.trim() === '');
  }

  addHero(): void {
    if (this.heroName.trim().length === 0) {
      return;
    }
    this.heroes.push(this.heroName);
    this.heroName = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
