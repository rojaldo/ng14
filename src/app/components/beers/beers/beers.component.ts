import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Beer } from 'src/app/models/beer';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];
  showBeers: Beer[] = [];

  value: number = 4;
  highValue: number = 6;
  options: Options = {
    floor: 0,
    ceil: 60
  };

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.service.beers$.subscribe(
      (beers) => {
        this.beers = beers;
        this.filterBeers();
      }
    );
    this.service.getBeers();
  }

  filterBeers() {
    of(this.beers).subscribe(
      (beers) => {
        this.showBeers = beers.filter(
          (beer) => {
            return beer.abv >= this.value && beer.abv <= this.highValue;
          }
        );
      }
    );
  }

  handleChange() {
    this.filterBeers();
  }

}
