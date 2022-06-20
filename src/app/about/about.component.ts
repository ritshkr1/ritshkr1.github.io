import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  imagePath1 = '';

  constructor() {}

  ngOnInit(): void {
    this.imagePath1 = '../../assets/avatar-2.svg';
  }
}
