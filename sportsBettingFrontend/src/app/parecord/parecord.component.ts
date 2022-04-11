import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {PARecord} from '../_models/PARecord';
import {NotificationService} from '../_services/notification.service';
import {PAType} from '../_models/PAType';
import {ThemePalette} from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'parecord-component',
  templateUrl: './parecord.component.html',
  styleUrls: ['./parecord.component.css']
})
export class ParecordComponent implements OnInit {

  @Input() parecord: PARecord;

  @Output() deleteEvent: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() editEvent: EventEmitter<string> = new EventEmitter<string>();

  directionIcon: string;
  colors: ThemePalette[] = ['primary', 'accent', 'warn'];
  color: ThemePalette = this.colors[Math.floor(Math.random() * Math.floor(this.colors.length))];

  private deleteClicked() {
    this.deleteEvent.emit(this.parecord.createdDate);
  }

  private editClicked() {
    this.editEvent.emit('Edit');
  }


  private getCalPercent(rec: PARecord): number {
    return Math.round(rec.calories / rec.caloriegoal * 100);
  }

  private getMinPercent(rec: PARecord): number {
    return Math.round(rec.minutes / rec.minutegoal * 100);
  }

  private getIcon(): string {
    if (this.parecord.activityType === PAType.running) {
      return 'directions_run';
    } else if (this.parecord.activityType === PAType.walking) {
      return 'directions_walk';
    } else {
      return 'directions_bike';
    }
  }


  ngOnInit() {
    this.directionIcon = this.getIcon();
  }




}

