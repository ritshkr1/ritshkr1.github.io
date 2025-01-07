import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent implements OnInit {
  imagePath1 = '';

  constructor() {}

  ngOnInit(): void {
    this.imagePath1 = '../../assets/avatar-2.svg';
  }
}
