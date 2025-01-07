import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  imagePath: string = '';
  textToChange: string = '';
  ngOnInit(): void {
    this.imagePath = '../../assets/avatar-1.svg';
  }
}
