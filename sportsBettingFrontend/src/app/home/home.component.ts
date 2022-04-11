import {Component, OnDestroy, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {UserService} from '../_services/user.service';
import {NotificationService} from '../_services/notification.service';
import {PARecord} from '../_models/PARecord';

@Component({
  templateUrl: 'home.component.html',

  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {


  parecords: PARecord[] = [];


  constructor(
    private userService: UserService,
    private notifService: NotificationService
  ) {
  }

  ngOnInit() {
    this.loadAllActivities();
  }

  private loadAllActivities() {
    this.userService.getActivities().subscribe(
      parecords => {
        this.parecords = parecords;

      },
      error => {
        this.notifService.showNotif(error, 'error');
      });
  }

  private deletePARecord(recDate: Date) {
    // this filter removes it from this class' array field of PARecords
    this.userService.deleteActivity(recDate);
    this.loadAllActivities();
  }

  private editClicked(message: string) {
    this.notifService.notImplementedWarning(message);
  }
}

