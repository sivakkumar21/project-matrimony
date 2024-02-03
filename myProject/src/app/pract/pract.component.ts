import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pract',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pract.component.html',
  styleUrls: ['./pract.component.css']
})
export class PractComponent {
  currentIndex: number = 0;
  dummyCards: number[] = [1, 2, 3]; // Dummy background cards data

  moveToNext(transitionRight: boolean) {
    if (transitionRight) {
      this.currentIndex++;
    } else {
      this.currentIndex--;
    }
  }
}
