import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css'],
})
export class EffectsComponent implements OnInit {
  words = ['frontend developer. ', 'html', 'health', 'goods', 'supply'];
  i = 0;
  timer: any;
  constructor() {}

  ngOnInit(): void {
    this.typingEffect();
  }
  typingEffect() {
    var word = this.words[this.i].split('');
    var loopTyping = () => {
      if (word.length > 0) {
        document.getElementById('word')!.innerHTML += word.shift();
      } else {
        this.deletingEffect();
        false;
      }
      this.timer = setTimeout(loopTyping, 500);
    };
    loopTyping();
  }
  deletingEffect() {
    var word = this.words[this.i].split('');
    var loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        document.getElementById('word')!.innerHTML = word.join('');
        return;
      } else {
        if (this.words.length > this.i + 1) {
          this.i++;
        } else {
          this.i = 0;
        }
        this.typingEffect();
        false;
      }
      this.timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
  }
}
