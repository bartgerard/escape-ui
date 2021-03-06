import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Team} from "../model/team";
import {MissionResult} from "../model/mission-result";
import "rxjs/add/operator/map";

@Injectable()
export class TeamService {

  //apiRoot: string = "http://192.168.0.178:8080";

  constructor(
    private http: Http
  ) {
  }

  teams(): Observable<Team[]> {
    const url = `http://${location.hostname}:8080/teams`;
    return this.http.get(url).map(res => {
      return res.json();
    });
  }

  login(password: string): Observable<MissionResult> {
    const url = `http://${location.hostname}:8080/teams/login?password=${password}`;
    return this.http.get(url).map(res => {
      if (res.status === 200 && res.text() !== '') {
        return res.json();
      } else {
        return null;
      }
    });
  }

}
