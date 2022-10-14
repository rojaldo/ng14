import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private _beers: Beer[] = [];
  beers$ = new BehaviorSubject<Beer[]>(this._beers);

  constructor(private http: HttpClient) { }

  getBeers() {
    const observer = {
      next: (data: any) => {
        // console.log(data);
        for (const json of data) {
          let myBeer = new Beer(json);
          this._beers.push(myBeer);
        }

        this.beers$.next(this._beers);
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('Completed');
      }
    }
    if (this._beers.length === 0) {
      this.http.get('https://api.punkapi.com/v2/beers').subscribe(observer);
    }
  }
}
