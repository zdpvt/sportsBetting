import {Injectable} from '@angular/core';
import {Sport} from '../_models/sport';
import {Game} from '../_models/game';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class GameService {

  constructor() {}

  getResults() {} // Looks like they have this method for each game, idk if we can just call it and then subscribe until
  // a value is finally returned? or maybe call it once there should be results.

  getUpcomingGames(sport: Sport): Observable<Game> {
    if (sport === Sport.basketball) {
      // Really we would request from our API, however we are faking it for the framework
      return new Observable<Game>(observer => {
        observer.next({
          id: '1',
          sport: Sport.basketball,
          time: new Date(Date.now()), // Maybe will come as a string we can copy or a Date
          homeTeam: 'Toronto Raptors', // Could make 'Team's their own Model but I think it's unnecessary
          homeSpread: -3.0, // These are the values we would get from jsonodds.com
          homeSpreadLine: -110,
          homeMoneyLine: -153,
          awayTeam: 'Chicago Bulls',
          awaySpread: 3.0,
          awaySpreadLine: 110,
          awayMoneyLine: 132,
          totalNumber: 182.5,
          over: -110,
          under: -110
        });
      });

    } else if (sport === Sport.football) {

    } else if (sport === Sport.baseball) {

    } else if (sport === Sport.soccer) {

    }
  }


}
