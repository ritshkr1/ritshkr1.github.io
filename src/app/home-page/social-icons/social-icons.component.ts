import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrl: './social-icons.component.css'
})
export class SocialIconsComponent {
  @Input() link: string = '#';
  @Input() iconClass: string = '';
  @Input() label: string = '';
}
