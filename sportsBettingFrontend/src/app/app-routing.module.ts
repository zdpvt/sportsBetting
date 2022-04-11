import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_services/auth-guard.service';
import {AdminComponent} from './admin/admin.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'confirm', component: ConfirmationComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: '**', redirectTo: ''}];  // this means any other path gets redirected back to ''

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
