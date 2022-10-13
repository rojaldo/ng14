import { Component, OnInit } from '@angular/core';
import { Apod } from 'src/app/models/apod';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod: Apod = new Apod();

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    this.service.apod$.subscribe((json) => {
      this.apod = new Apod(json);
    });
    this.service.getApod();
  }

}
