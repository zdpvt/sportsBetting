import {Injectable} from '@angular/core';
import {Sport} from '../_models/sport';
import {Game} from '../_models/game';
import {Observable} from 'rxjs';
import {Bet} from '../_models/bet';
import {User} from '../_models/user';

@Injectable({providedIn: 'root'})
export class BetService {


  /*
  allBets: Bet[] = [user: User;
  sport: Sport;
  game: Game;
  position: string; // Idk how best to represent the user's position on a bet
  wager: number;
  status: string;];
   */

  constructor() {

  }

  getAllBetsOfUser(username: string) {
    // Would get all of a User's bets from the database, this will be simulated for now.

  }

  // addBet() {} idk

}
