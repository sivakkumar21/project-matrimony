import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'recommendation-card',
  standalone: true,
  imports: [CommonModule,MatSnackBarModule,MatCardModule],
  templateUrl: './recommendation-card.component.html',
  styleUrls: ['./recommendation-card.component.css']
})
export class RecommendationCardComponent {
@Input() data! :any;
  constructor(private _snackBar: MatSnackBar)
  {

  }
  openSnackBar(message: string
     ) {
    this._snackBar.open(message,'',{duration : 1000,verticalPosition :'top'});
  }
}
