import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imagePath: string = '';
  textToChange: string = '';
  ngOnInit(): void {
    this.imagePath = '../../assets/avatar-1.svg';
  }
  constructor() {}
}
