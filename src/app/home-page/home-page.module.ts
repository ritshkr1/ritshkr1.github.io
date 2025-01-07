import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { EffectsComponent } from '../effects/effects.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }
];

@NgModule({
  declarations: [
    HomePageComponent,
    EffectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
