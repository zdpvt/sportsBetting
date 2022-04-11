import {Component} from '@angular/core';
import {AuthService} from './_services/auth.service';
import {Router} from '@angular/router';
import {NotificationService} from './_services/notification.service';
import {User} from './_models/user';
import {Role} from './_models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW2';
  currentUser: User;


  constructor(  private router: Router,
                private authService: AuthService,
                private notifService: NotificationService
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin(): boolean {
    // tslint:disable-next-line:max-line-length
    // In a later version of this code. We will define a class User and have that encompass both the username and role. For now we will just hardcode it.
    return this.currentUser && this.currentUser.role === Role.admin;
  }

  get isUser() {

    return this.currentUser;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  notImplemented(message) {

    this.notifService.notImplementedWarning(message);
  }

}
