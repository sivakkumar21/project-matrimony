import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatIconModule,ReactiveFormsModule,FormsModule,MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router : Router, private _snackBar: MatSnackBar,private authService : AuthServiceService)
{

}
loginForm = new FormGroup({
  uName : new FormControl('',Validators.required),
  pWord : new FormControl('',Validators.required)
})
handleLogin()
{
  let inputObj = this.loginForm.value;


  if(this.authService.login(inputObj.uName,inputObj.pWord))
  {
    localStorage.setItem('token', "current token value");
    this.router.navigate(['/user/pending-matches']);
  }
  else{
    this._snackBar.open("Invalid Credentials",'Try Again!',{duration : 1500,verticalPosition :'top'});
    this.loginForm.reset();
    
  }

}
}
