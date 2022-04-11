import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import {MaterialModule} from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { ParecordComponent } from './parecord/parecord.component';
import { AdminComponent } from './admin/admin.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

//TDOD: add admin component to module. If you use CLI this will be done automatically.


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ParecordComponent,
    AdminComponent,
    ConfirmationComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
