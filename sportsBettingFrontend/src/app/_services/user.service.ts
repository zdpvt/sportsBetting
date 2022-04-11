import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {NotificationService} from './notification.service';
import {PAType} from '../_models/PAType';
import {PARecord} from '../_models/PARecord';
import {User} from '../_models/user';
import {Role} from '../_models/role';



const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


@Injectable({providedIn: 'root'})
export class UserService {


  parecords: PARecord[];
  PAArray: PAType[] = [PAType.running, PAType.walking, PAType.biking];


  constructor(private notif: NotificationService) {

    // Make field of User's?





    this.parecords = [{
      calories: 2345,
      minutes: 123,
      caloriegoal: 2000,
      minutegoal: 180,
      steps: 12000,
      activityType: PAType.walking,
      createdDate: new Date('2020-12-15T09:30:00')
    },
      {
        calories: 1345,
        minutes: 63,
        caloriegoal: 2000,
        minutegoal: 180,
        steps: 15000,
        activityType: PAType.biking,
        createdDate: new Date('2020-11-13T09:30:00')
      },
      {
        calories: 1945,
        minutes: 83,
        caloriegoal: 2000,
        minutegoal: 180,
        steps: 13000,
        activityType: PAType.running,
        createdDate: new Date('2020-11-19T06:30:00')
      },
      {
        calories: 1745,
        minutes: 639,
        caloriegoal: 2400,
        minutegoal: 190,
        steps: 19000,
        activityType: PAType.running,
        createdDate: new Date('2020-08-13T03:55:00')
      }

    ];

  }

  getAllUsers(): Observable<Array<User>> {
    // in complete code this will call NodeJS to retrieve all Users from
    // the database, for now it fakes them.
    const users: Array<User> = new Array<User>();

    for (let i = 0; i < 20; i++) {
      // Create 20 random Users
      const tradeNum: number = Math.floor(Math.random() * 200);
      const newUser = {
        username: (NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
          ' ' +
          NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
          '.'),
        role: Role.user,
        trades: tradeNum,
        earnings: Math.floor(Math.random() * 200000),
        wins: Math.floor(Math.random() * tradeNum),
        wagered: Math.floor(Math.random() * 150000),
        available: Math.floor(Math.random() * 100000)
      };
      users.push(newUser);
    }

    return of<User[]>(users);
  }

  getActivities() {
    // const param = 'getCourse';
    console.log('getActivities()');

    return new Observable<PARecord[]>(subscriber => {
      if (this.parecords.length > 0) {
        setTimeout(() => {
          subscriber.next(this.parecords);
        }, 1000);
      } else {
        setTimeout(() => {
          subscriber.error('No courses in the DB. Create a new course.');
        }, 1000);
      }

    });

  }


  deleteActivity(createdDate: Date) {

    this.parecords = this.parecords.filter(currRecord => currRecord.createdDate !== createdDate);

  }

  generateRandomActivity() {
    // First make sure we haven't reached 10 cards
    if (this.parecords.length >= 10) {
      this.notif.showNotif('Maximum amount of activities created');
    } else {
      setTimeout(() => {
        const newRecord: PARecord = {
          calories: Math.round(Math.random() * 2000),
          minutes: Math.round(Math.random() * 200),
          caloriegoal: (Math.random() * 100) + 1950,
          minutegoal: Math.random()  * 300,
          steps: Math.random() * 2000,
          activityType: this.PAArray[Math.random() * 3],
          createdDate: new Date(Date.now())
        };
        this.parecords.push(newRecord);
      }, 1000);
    }
  }


}
