import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WorksPageComponent } from './works-page.component';


const routes: Routes = [
  { path: '', component: WorksPageComponent }
];

@NgModule({
  declarations: [
    WorksPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WorksPageModule { }
