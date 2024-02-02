import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatchCardComponent } from '../match-card/match-card.component';
import { MyMatchesService } from '../my-matches.service';

@Component({
  selector: 'app-custom-caraousal',
  templateUrl: './custom-caraousal.component.html',
  styleUrls: ['./custom-caraousal.component.css'],
  imports : [CommonModule,FormsModule,MatchCardComponent],
  standalone:true
})
export class CustomCaraousalComponent {

  selectedIndex : number = 0;

  totalIndex : number[] = [0,1,2,3,4]

  data : any = [];

  currentData : any = [];

  constructor( private myMatches :MyMatchesService)
  {

  }
  
  ngOnInit()
  {
    this.data = this.myMatches.getMyMatches();
    this.currentData= this.data[0]
  }
  handlePrev()
  {
   let currentIndex= this.getCurrentIndex();
  
    if(currentIndex !=0)
    {

currentIndex--;
this.currentData=this.data[currentIndex];
    }
  }

  handleNext()
  {
    let currentIndex = this.getCurrentIndex();
    if(currentIndex< this.data.length-1)
    {
    currentIndex++;
    this.currentData = this.data[currentIndex]

  }
  }

  getCurrentIndex()
  {
return this.data.indexOf(this.currentData);
  }
}
