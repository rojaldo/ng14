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
    this.service.apod$.subscribe((json) => {
      this.apod = new Apod(json);
    });
    this.service.getApod();
  }

  handleDateSelected(value: any): void {
    // value to string date format yyyy-mm-dd
    const dateString = `${value.year}-${value.month}-${value.day}`;
    this.service.getApod(dateString);
    
  }

}
