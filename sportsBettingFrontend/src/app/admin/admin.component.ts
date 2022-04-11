import { Component, OnInit } from '@angular/core';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../_models/user';
import {AuthService} from '../_services/auth.service';
import {UserService} from '../_services/user.service';

export interface UserData {
  rank: number;
  username: string;
  earnings: number;
  winRate: number;
  trades: number;
  wagered: number;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  '100000',
  '120000',
  '140000',
  '105500',
  '102000',
  '1000000',
  '200000',
  '300000',
];
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

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class AdminComponent implements AfterViewInit{
  displayedColumns: string[] = ['rank', 'username', 'earnings', 'winRate', 'trades', 'wagered'];
  dataSource: MatTableDataSource<UserData>;
  currUser: User = this.authservice.currentUserValue;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  private modUsers: Array<UserData> = new Array<UserData>();

  constructor(private authservice: AuthService, private userservice: UserService) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.userservice.getAllUsers().subscribe( allUsers => {
      for (let i = 0; i < allUsers.length; i++) {
        let wRate = 0;
        if (allUsers[i].trades > 0) {
          wRate = Math.floor(allUsers[i].wins / allUsers[i].trades * 100);
        }
        this.modUsers.push( { rank: 0, username: allUsers[i].username, earnings: allUsers[i].earnings,
          winRate: wRate, trades: allUsers[i].trades, wagered: allUsers[i].wagered});
      }
      this.rankUsers();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  rankUsers() {
    this.modUsers.sort((a, b) => b.earnings - a.earnings );
    for (let i = 0; i < this.modUsers.length; i++) {
      this.modUsers[i].rank = i + 1;
    }
    this.dataSource = new MatTableDataSource(this.modUsers);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /*
  createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';

    this.userservice.getAllUsers().subscribe(x => {
      // console.log(x);
      this.currUser = x[id % 15];
    });

    return {
      user: this.currUser,
      rank: 0,
      winRate: Math.min(Math.floor(this.currUser.wins / this.currUser.trades * 100), 100)
    };
  }
  */

}



