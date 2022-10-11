import { Component } from '@angular/core';

enum States {
  Init,
  FirstFigure,
  SecondFigure,
  Result
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  display = '';

  currentState = States.Init;
  firstFigure = 0;
  secondFigure = 0;
  operator = '';
  result = 0;

  processNumber(value: number) {
    switch (this.currentState) {
      case States.Init:
        this.firstFigure = value;
        this.display = value.toString();
        this.currentState = States.FirstFigure;
        break;
      case States.FirstFigure:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display += value.toString();
        break;
      case States.SecondFigure:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display += value.toString();
        break;
      case States.Result:
        this.firstFigure = value;
        this.secondFigure = 0;
        this.operator = '';
        this.result = 0;
        this.display = value.toString();
        this.currentState = States.FirstFigure;
        break;
      default:
        throw new Error('Invalid state');
    }
  }

  processSymbol(value: string) {
    switch (this.currentState) {
      case States.Init:
        break;
      case States.FirstFigure:
        if(value === '+' || value === '-' || value === '*' || value === '/') {
          this.operator = value;
          this.display += value;
          this.currentState = States.SecondFigure;
        }
        break;
      case States.SecondFigure:
        if(value === '=') {
          this.result = this.calculate();
          this.display += value + this.result.toString();
          this.currentState = States.Result;
        }
        break;
      case States.Result:
        if(value === '+' || value === '-' || value === '*' || value === '/') {
          this.firstFigure = this.result;
          this.secondFigure = 0;
          this.operator = value;
          this.result = 0;
          this.display = this.firstFigure.toString() + value;
          this.currentState = States.SecondFigure;
        }
        break;
      default:
        throw new Error('Invalid state');
    }

  }

  calculate(): number {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;
      default:
        throw new Error('Invalid operator');
    }
  }

  buttonClicked(value: number | string) {
    if(typeof value === 'number') this.processNumber(value);
    else if (typeof value === 'string') this.processSymbol(value);
    else throw new Error('Invalid value');
  }

  clr() {
    this.display = '';
    this.currentState = States.Init;
    this.firstFigure = 0;
    this.secondFigure = 0;
    this.operator = '';
    this.result = 0;
  }
}
