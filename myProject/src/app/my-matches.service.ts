import { Injectable } from '@angular/core';
import { myMatches } from 'src/assets/jsonData/myMatchesdata';
import { Suggestions } from './interface/suggestions';

@Injectable({
  providedIn: 'root'
})
export class MyMatchesService {

  constructor() { }

  getMyMatches() :Suggestions[]
  {
    return myMatches;
  }
}
