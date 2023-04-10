import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { EffectsComponent } from './effects/effects.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorksComponent,
    ContactsComponent,
    ExperienceComponent,
    HomeComponent,
    EffectsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'experience', component: ExperienceComponent },
        { path: 'works', component: WorksComponent },
        { path: 'contacts', component: ContactsComponent },
      ],
      { useHash: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
