import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'match-card',
  standalone: true,
  imports: [CommonModule,MatSnackBarModule,MatCardModule],
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent {
  @Input() index! : number;
  @Input() data ! : any;
  constructor(private _snackBar: MatSnackBar,private router : Router)
  {

  }
  openSnackBar(message: string
     ) {
    this._snackBar.open(message,'',{duration : 1500,verticalPosition :'bottom'});
  }
  handleClick(data: any)
  {
    this.router.navigate(['/user/pending-matches/profile/' + data.id])
  }
}
