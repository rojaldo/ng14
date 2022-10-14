import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Apod } from 'src/app/models/apod';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod: Apod = new Apod();
  // today date
  dateSelected: NgbDateStruct = {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()};

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    this.service.apod$.subscribe((apod) => {
      this.apod = apod;
      console.log(this.apod.toString());
      
    });
    this.service.getApod();
  }

  handleDateSelected(): void {
    // value to string date format yyyy-mm-dd
    const dateString = `${this.dateSelected.year}-${this.dateSelected.month}-${this.dateSelected.day}`;
    this.service.getApod(dateString);
    
  }

}
