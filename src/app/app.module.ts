import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [        
      { path: '', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
      { path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule) },
      { path: 'contacts', loadChildren: () => import('./contact-page/contact-page.module').then(m => m.ContactPageModule) },
      { path: 'experience', loadChildren: () => import('./experience-page/experience-page.module').then(m => m.ExperiencePageModule) },
      { path: 'works', loadChildren: () => import('./works-page/works-page.module').then(m => m.WorksPageModule) },
      { path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule) },
      ],
      { useHash: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
