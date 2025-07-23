import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  isDarkMode = false;
  constructor(){
    const html = document.documentElement;
  html.setAttribute('data-bs-theme', this.isDarkMode ? 'dark' : 'light');
  }
  toggleTheme() {
  this.isDarkMode = !this.isDarkMode;
  this.applyTheme();
}

applyTheme() {
  const html = document.documentElement;
  html.setAttribute('data-bs-theme', this.isDarkMode ? 'dark' : 'light');
}
}
