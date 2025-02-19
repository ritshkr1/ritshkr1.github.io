import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';
import { SharedModule } from '../shared.module';


const routes: Routes = [
  { path: '', component: ContactPageComponent }
];

@NgModule({
  declarations: [
    ContactPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactPageModule { }
