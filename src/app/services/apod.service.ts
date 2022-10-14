import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Apod } from '../models/apod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private _apod: Apod = new Apod();
  apod$ = new BehaviorSubject(this._apod);

  constructor(private http: HttpClient) { }

  getApod(date?: String): void {

    const baseURL = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'DEMO_KEY';
    let url = `${baseURL}?api_key=${apiKey}`;
    if (date !== undefined) {
      url += `&date=${date}`;
    }
    const observer = {
      next: (json: any) => {
        this._apod = new Apod(json);
        this.apod$.next(this._apod);
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('complete');
      }
    };

    this.http.get(url).subscribe(observer);
  }
}
