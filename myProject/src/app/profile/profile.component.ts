import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyMatchesService } from '../my-matches.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone:true,
  imports :[CommonModule]
})
export class ProfileComponent {

  profileId!: string;
  data! : any;
  selectedProfile! : any;
  constructor(private route : ActivatedRoute,private router : Router,private myMatches : MyMatchesService)
  {

  }
  ngOnInit()
  {
    this.profileId = this.route.snapshot.url[2].path;
    console.log(this.profileId);
this.data = this.myMatches.getMyMatches();
this.selectedProfile = this.data.filter((item : any) => {
  return item.id ==this.profileId;
  })[0];
  }

  handleBackNav()
  {
    this.router.navigate(['/user/pending-matches'])
  }

}
