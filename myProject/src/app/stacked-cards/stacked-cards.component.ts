// stacked-cards.component.ts
import { Component } from '@angular/core';


@Component({
  selector: 'app-stacked-cards',
  templateUrl: './stacked-cards.component.html',
  styleUrls: ['./stacked-cards.component.css']
})
export class StackedCardsComponent {
  profiles = [
    { name: 'John', age: 30, image: 'john.jpg' },
    { name: 'Alice', age: 25, image: 'alice.jpg' },
    { name: 'Bob', age: 35, image: 'bob.jpg' },
  ];

  currentIndex = 0;

  handleYes() {
    this.currentIndex = (this.currentIndex + 1) % this.profiles.length;
  }

  handleNo() {
    this.currentIndex = (this.currentIndex - 1 + this.profiles.length) % this.profiles.length;
  }
}
