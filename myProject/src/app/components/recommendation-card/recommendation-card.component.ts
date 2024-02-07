import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCard, MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
import { animate, keyframes, transition, trigger } from '@angular/animations';

import * as kf from "../../keyframes/keyframes"
import { HammerModule } from '@angular/platform-browser';
import "hammerjs"




@Component({
  selector: 'recommendation-card',
  standalone: true,
  imports: [CommonModule,MatSnackBarModule,MatCardModule,MatIconModule,HammerModule],
  templateUrl: './recommendation-card.component.html',
  styleUrls: ['./recommendation-card.component.css'],
  animations : [
    trigger('cardAnimator',[
      transition('* => slideOutLeft',animate(1000,keyframes(kf.slideOutLeft))),
      transition('*=> slideOutRight', animate(1000,keyframes(kf.slideOutRight)))
    ])
  ]
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

  animationState!: string;

  startAnimation(state : string)
  {
console.log(state);
if(!this.animationState)
{
  this.animationState = state;

}
if(state==="slideOutRight")
{
  setTimeout(()=>{this.actionOnCard.emit(this.data?.id);
    this._snackBar.open("I am Interested",'',{duration : 1000,verticalPosition :'bottom'});
  },200)
  
}

if(state==="slideOutLeft")
{
  setTimeout(()=>{this.actionOnCard.emit(this.data?.id);
    this._snackBar.open("I am not Interested",'',{duration : 1000,verticalPosition :'bottom'});
  },200)
  
}
  }

  resetAnimationState()
  {
console.log("reset");
    this.animationState = ""
  }



}
