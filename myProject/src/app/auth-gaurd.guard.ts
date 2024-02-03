import {  inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn, Router } from '@angular/router';

export const authGaurdGuard: CanActivateFn = (route, state) => {

  if(localStorage.getItem('token'))
  return true;
else
{
   inject(Router).navigate(['/login']);
alert("User Not Logged In")
return false;
}
};
