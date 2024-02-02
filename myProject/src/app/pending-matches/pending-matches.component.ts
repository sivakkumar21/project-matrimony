import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Carousel,
  initTE,
} from "tw-elements";
import { MyMatchesService } from '../my-matches.service';
import { MatchCardComponent } from '../match-card/match-card.component';


@Component({
  selector: 'pending-matches',
  templateUrl: './pending-matches.component.html',
  styleUrls: ['./pending-matches.component.css'],
  standalone : true,
  imports :[CommonModule,MatchCardComponent]
})


export class PendingMatchesComponent {
  data : any = [];
  currentData : any = [];
  // carouselExampleControls = new Carousel(document.getElementById("carouselExampleControls"));

   myCarousel : any;

  constructor( private myMatches :MyMatchesService)
  {

  }
  ngOnInit()
  {
    this.data = this.myMatches.getMyMatches();
    this.currentData= this.data[0]
    initTE({ Carousel });

     this.myCarousel = new Carousel(document.getElementById("carouselExampleControls"));

  }

  handleNext()
  {

  let currentIndex = this.getCurrentIndex();
  if(currentIndex< this.data.length-1)
  {
    this.myCarousel.next();

  currentIndex++;
  this.currentData = this.data[currentIndex]

  }
  else{
    this.currentData=this.data[0];
    this.myCarousel.next();

  }
// this.myCarousel.next();

}

handlePrev()
{
  let currentIndex= this.getCurrentIndex();
  
  if(currentIndex !=0)
  {

currentIndex--;
this.currentData=this.data[currentIndex];
this.myCarousel.prev();

  }
  else{
    this.currentData=this.data[this.data.length-1];
    this.myCarousel.prev();

  }
// this.myCarousel.prev();
}
getCurrentIndex()
{
return this.data.indexOf(this.currentData);
}

}