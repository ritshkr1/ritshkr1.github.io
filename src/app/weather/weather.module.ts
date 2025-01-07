import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: WeatherComponent }
];

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class WeatherModule { }
