import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

  display = '';

  constructor(private service: CalculatorService) {
  }

  ngOnInit(): void {
    this.service.display$.subscribe(value => this.display = value);
  }

  ngOnDestroy(): void {
    // this.service.display$.unsubscribe();
  }

  buttonClicked(value: number | string) {
    if(typeof value === 'number') this.service.processNumber(value);
    else if (typeof value === 'string') this.service.processSymbol(value);
    else throw new Error('Invalid value');
  }

  clr() {
    this.display = '';
    this.service.clear();
  }


}
