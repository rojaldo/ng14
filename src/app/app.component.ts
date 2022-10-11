import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng14';
  message = 'Hello World';

  handleMyClick(value: number | string) {
    console.log('clicked');
    this.message = `Hello ${value}`;
  }
}
