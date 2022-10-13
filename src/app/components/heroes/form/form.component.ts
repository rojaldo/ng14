import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() onAddHero = new EventEmitter<Hero>();

  heroName = '';
  heroDescription = '';

  constructor() { }

  ngOnInit(): void {
  }

  invalidForm(): boolean {
    return (this.heroName.trim() === '');
  }

  addHero(): void {
    if (this.heroName.trim().length === 0) {
      return;
    }
    this.onAddHero.emit(new Hero(this.heroName, this.heroDescription));
    this.heroName = '';
    this.heroDescription = '';
  }

}
