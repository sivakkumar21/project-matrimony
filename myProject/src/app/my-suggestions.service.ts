import { Injectable } from '@angular/core';
import { mySuggestions } from 'src/assets/jsonData/mySuggestions';

@Injectable({
  providedIn: 'root'
})
export class MySuggestionsService {

  constructor() { }

  getMySuggestions()
  {
    return mySuggestions;
  }


}
