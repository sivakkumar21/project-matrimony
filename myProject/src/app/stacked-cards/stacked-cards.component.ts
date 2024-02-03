// stacked-cards.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecommendationCardComponent } from '../recommendation-card/recommendation-card.component';
import { MySuggestionsService } from '../my-suggestions.service';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-stacked-cards',
  templateUrl: './stacked-cards.component.html',
  styleUrls: ['./stacked-cards.component.css'],
  standalone: true,
  imports : [CommonModule,RecommendationCardComponent,]
})
export class StackedCardsComponent {
  profiles : any= [
  
  ];

constructor(private mySuggestions : MySuggestionsService)
{

}
ngOnInit()
{
  this.profiles= this.mySuggestions.getMySuggestions();
}

  
  handleActionOnCard(message :any)
  {
    this.profiles = this.profiles.filter((item : any)=>{ return item.id!=message})
  }
}
