import { Injectable } from '@angular/core';
import { myMatches } from 'src/assets/jsonData/myMatchesdata';

@Injectable({
  providedIn: 'root'
})
export class MyMatchesService {

  constructor() { }

  getMyMatches()
  {
    return myMatches;
  }
}
