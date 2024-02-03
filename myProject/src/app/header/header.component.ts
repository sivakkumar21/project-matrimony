import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router : Router)
  {

  }
  isMenuOpen : boolean = false;
handleClickMenu()
{
  this.isMenuOpen=!this.isMenuOpen;
}
handleLogout()
{
  localStorage.clear();
  this.router.navigate(['/login'])
}
}
