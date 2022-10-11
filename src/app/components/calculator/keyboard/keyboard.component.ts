import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() onClicked = new EventEmitter<number | string>();

  constructor() { }

  ngOnInit(): void {
  }

  clicked(value: number | string) {
    this.onClicked.emit(value);
  }
    

}
