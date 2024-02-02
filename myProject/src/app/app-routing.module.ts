import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchSwipeComponent } from './search-swipe/search-swipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatchCardComponent } from './match-card/match-card.component';
import { CustomCaraousalComponent } from './custom-caraousal/custom-caraousal.component';
import { PendingMatchesComponent } from './pending-matches/pending-matches.component';
import { ProfileComponent } from './profile/profile.component';
import { StackedCardsComponent } from './stacked-cards/stacked-cards.component';

const routes: Routes = [
{path : "", redirectTo : 'my-matches', pathMatch : 'full'},

  {path : "my-matches", component : SearchSwipeComponent,

},
  {
    path:'match-card', component : MatchCardComponent,
    
  },
{
path:'caraousal', component:CustomCaraousalComponent
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
    path : '**', component : PageNotFoundComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
