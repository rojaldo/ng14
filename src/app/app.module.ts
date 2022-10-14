import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { CalculatorService } from './services/calculator.service';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/heroes/form/form.component';
import { ListComponent } from './components/heroes/list/list.component';
import { ApodComponent } from './components/apod/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BeersComponent } from './components/beers/beers/beers.component';
import { AbvPipe } from './pipes/abv.pipe';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BeersService } from './services/beers.service';
import { ApodService } from './services/apod.service';
import { HeroesService } from './services/heroes.service';
import { AppRoutingModule } from './approutingmodule';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    FormComponent,
    ListComponent,
    ApodComponent,
    BeersComponent,
    AbvPipe,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    NgxSliderModule,
    AppRoutingModule
  ],
  providers: [CalculatorService, BeersService, ApodService, HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
