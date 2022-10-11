import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

enum States {
  Init,
  FirstFigure,
  SecondFigure,
  Result
}

@Injectable()
export class CalculatorService {

  private display = '';
  display$ = new BehaviorSubject<string>(this.display);
  private currentState = States.Init;
  private firstFigure = 0;
  private secondFigure = 0;
  private operator = '';
  private result = 0;

  constructor() { }

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

    this.display$.next(this.display);

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

    this.display$.next(this.display);

  }

  private calculate(): number {
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

  clear() {
    this.currentState = States.Init;
    this.firstFigure = 0;
    this.secondFigure = 0;
    this.operator = '';
    this.result = 0;
    this.display = '';
    this.display$.next(this.display);
  }

}
