import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  display = '';

  buttonClicked(value: number | string) {
    console.log('clicked');
    this.display +=  value;
  }

  clr() {
    this.display = '';
  }
}
