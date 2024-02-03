import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router : Router) { }

  login(userName : any, password :any)
  {
    if(userName ==='admin' && password ==='admin')
    {
      return true;
    }
    else{
      return false;
    }
  }

  logout()
  {
    localStorage.clear();
  this.router.navigate(['/login'])
  }
}
