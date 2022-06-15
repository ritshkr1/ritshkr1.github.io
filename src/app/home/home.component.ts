import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imagePath: string = '';
  textToChange: string = '';
  words: any;
  ngOnInit(): void {
    this.imagePath = '../../assets/avatar-1.svg';
  }
  constructor() {
    let words = ['frontend', 'backend'];
    words.forEach((element) => {
      return (this.textToChange = element);
    });
    this.textToChange = '';
  }
}
