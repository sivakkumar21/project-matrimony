import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'match-card',
  standalone: true,
  imports: [CommonModule,MatSnackBarModule],
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent {
  @Input() index! : number;
  @Input() data ! : any;
  constructor(private _snackBar: MatSnackBar)
  {

  }
  openSnackBar(message: string
     ) {
    this._snackBar.open(message,'',{duration : 1000,verticalPosition :'top'});
  }
}
