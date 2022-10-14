import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Apod } from 'src/app/models/apod';
import { ApodService } from 'src/app/services/apod.service';

import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apiLoaded = false;
  apod: Apod = new Apod();
  // today date
  dateSelected: NgbDateStruct = {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()};

  constructor(private service: ApodService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.service.apod$.subscribe((apod) => {
      this.apod = apod;
      console.log(this.apod.toString());
      
    });
    this.service.getApod();

  }

  getVideoID(): string {
    // get ID from youtube URL
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = this.apod.url.match(regExp);
    return (match&&match[7].length==11)? match[7] : '';
  }


  handleDateSelected(): void {
    // value to string date format yyyy-mm-dd
    const dateString = `${this.dateSelected.year}-${this.dateSelected.month}-${this.dateSelected.day}`;
    this.service.getApod(dateString);
    
  }

}
