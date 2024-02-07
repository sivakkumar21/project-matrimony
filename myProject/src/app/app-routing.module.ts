import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PendingMatchesComponent } from './pending-matches/pending-matches.component';
import { ProfileComponent } from './profile/profile.component';
import { RecommendationCardComponent } from './components/recommendation-card/recommendation-card.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { authGaurdGuard } from './auth-gaurd.guard';

const routes: Routes = [

  {path : 'login', component : LoginComponent},

  {path :"", redirectTo : 'login', pathMatch:'full'},

{path : 'user',component : LayoutComponent, canActivate: [authGaurdGuard], children : [

  

{
  path: 'pending-matches',component:PendingMatchesComponent
},
{
  path :'pending-matches/profile/:id',component :ProfileComponent
},
{
path:'stacked-cards', loadComponent : ()=>import("./stacked-cards/stacked-cards.component").then((m)=>m.StackedCardsComponent)
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
