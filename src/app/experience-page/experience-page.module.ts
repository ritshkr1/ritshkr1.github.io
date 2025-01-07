import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencePageComponent } from './experience-page.component';


const routes: Routes = [
  { path: '', component: ExperiencePageComponent }
];

@NgModule({
  declarations: [
    ExperiencePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExperiencePageModule { }
