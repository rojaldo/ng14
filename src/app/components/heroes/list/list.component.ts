import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() myHeroes: Hero[] = [];
  @Output() onRemoveHero = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeHero(i: number): void {
    this.onRemoveHero.emit(i);    
  }

}

