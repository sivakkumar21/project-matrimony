import { Injectable } from '@angular/core';
import { mySuggestions } from 'src/assets/jsonData/mySuggestions';
import { Suggestions } from './interface/suggestions';

@Injectable({
  providedIn: 'root'
})
export class MySuggestionsService {

  constructor() { }

  getMySuggestions() :Suggestions[]
  { 
    return mySuggestions;
  }


}
