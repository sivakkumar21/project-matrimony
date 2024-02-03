import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCard, MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'



@Component({
  selector: 'recommendation-card',
  standalone: true,
  imports: [CommonModule,MatSnackBarModule,MatCardModule,MatIconModule],
  templateUrl: './recommendation-card.component.html',
  styleUrls: ['./recommendation-card.component.css']
})
export class RecommendationCardComponent {
@Input() data! :any;
  @Output()
  actionOnCard= new EventEmitter()
  constructor(private _snackBar: MatSnackBar)
  {

  }
  openSnackBar(message: string
     ) {
this.actionOnCard.emit(this.data?.id)
    this._snackBar.open(message,'',{duration : 1000,verticalPosition :'bottom'});
  }
}
