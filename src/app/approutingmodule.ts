import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ApodComponent } from './components/apod/apod/apod.component';
import { BeersComponent } from './components/beers/beers/beers.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { ErrorComponent } from './components/error/error.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { ApodGuard } from './guards/apod.guard';

const routes: Routes = [
    { path: 'calculator', component: CalculatorComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'apod', component: ApodComponent, canActivate: [ApodGuard]},
    { path: 'beers', component: BeersComponent },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    { path: '**', component: ErrorComponent }


]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }