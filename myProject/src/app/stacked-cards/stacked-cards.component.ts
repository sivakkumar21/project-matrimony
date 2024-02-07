// stacked-cards.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecommendationCardComponent } from '../components/recommendation-card/recommendation-card.component';
import { MySuggestionsService } from '../my-suggestions.service';
import { Suggestions } from '../interface/suggestions';


@Component({
  selector: 'app-stacked-cards',
  templateUrl: './stacked-cards.component.html',
  styleUrls: ['./stacked-cards.component.css'],
  standalone: true,
  imports : [CommonModule,RecommendationCardComponent],
 
})
export class StackedCardsComponent {
  profiles! : Suggestions[]
constructor(private mySuggestions : MySuggestionsService)
{

}
ngOnInit()
{
  this.profiles= this.mySuggestions.getMySuggestions();
}

  
  handleActionOnCard(message :string)
  {
    this.profiles = this.profiles.filter((item : Suggestions)=>{ return item.id!=message})
  }


  

}
