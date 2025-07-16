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

}
