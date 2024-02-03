import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatchCardComponent } from './match-card/match-card.component';
import { PendingMatchesComponent } from './pending-matches/pending-matches.component';
import { ProfileComponent } from './profile/profile.component';
import { StackedCardsComponent } from './stacked-cards/stacked-cards.component';
import { RecommendationCardComponent } from './recommendation-card/recommendation-card.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path : 'login', component : LoginComponent},

{path : 'user',component : LayoutComponent, children : [

  {
    path:'match-card', component : MatchCardComponent,
    
  },

{
  path: 'pending-matches',component:PendingMatchesComponent
},
{
  path :'pending-matches/profile/:id',component :ProfileComponent
},
{
path:'stacked-cards',component :StackedCardsComponent
},
{
  path :'recommendation', component:RecommendationCardComponent
},
]},


  {
    path : '**', component : PageNotFoundComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
