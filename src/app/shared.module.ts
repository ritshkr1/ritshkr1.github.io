import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from './home-page/social-icons/social-icons.component';

@NgModule({
  declarations: [SocialIconsComponent],  // Declare the component
  imports: [CommonModule],  // Import CommonModule for basic Angular features
  exports: [SocialIconsComponent]  // Export the component
})
export class SharedModule { }
