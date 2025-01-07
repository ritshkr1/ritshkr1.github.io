import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css'],
})
export class EffectsComponent implements OnInit, OnDestroy {
  words = [
    'Angular Developer with frontend expertise.',
    'Web Developer specializing in frontend technologies.',
    'Experienced in HTML & CSS for responsive design.',
    'Skilled in JavaScript & TypeScript for dynamic web apps.',
    'Proficient in creating responsive, mobile-friendly layouts.',
    'Experienced in building Single-page Applications (SPAs).',
    'Expert in component-based architecture.',
    'Familiar with Agile development processes.'
]
  i = 0; // Index of the current word
  timer: any;

  constructor() {}

  ngOnInit(): void {
    this.typingEffect();
  }

  ngOnDestroy(): void {
    // Clear the timeout to avoid memory leaks when the component is destroyed
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  typingEffect() {
    const word = this.words[this.i].split('');
    let loopTyping = () => {
      if (word.length > 0) {
        document.getElementById('word')!.innerHTML += word.shift(); // Add next character
      } else {
        this.deletingEffect(); // Start deleting the word when typing is finished
        return; // Ensure it doesn't continue typing once the word is complete
      }
      this.timer = setTimeout(loopTyping, 100); // Adjust typing speed here
    };
    loopTyping();
  }

  deletingEffect() {
    const word = this.words[this.i].split('');
    let loopDeleting = () => {
      if (word.length > 0) {
        word.pop(); // Remove the last character
        document.getElementById('word')!.innerHTML = word.join(''); // Update the word in the DOM
      } else {
        // Once the word is fully deleted, move to the next word in the array
        this.i = (this.i + 1) % this.words.length; // Loop back to the first word when we reach the end
        this.typingEffect(); // Start typing the next word
        return; // Ensure it doesn't continue deleting once the word is completely erased
      }
      this.timer = setTimeout(loopDeleting, 30); // Adjust deleting speed here
    };
    loopDeleting();
  }
}
