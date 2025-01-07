import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMobileMenuOpen: boolean = false; // Track if the mobile menu is open

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  // Toggle the mobile menu visibility
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Close the mobile menu when clicking outside of it
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

    // Check if the click was inside the mobile menu or the hamburger button
    if (!this.elRef.nativeElement.contains(clickedElement)) {
      this.isMobileMenuOpen = false;  // Close the menu
    }
  }
}
