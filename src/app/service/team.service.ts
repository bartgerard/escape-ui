import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Team} from "../model/team";

@Injectable()
export class TeamService {

  apiRoot: string = "http://192.168.0.178:8080";

  constructor(
    private http: Http
  ) {
  }

  teams(): Observable<Team[]> {
    const url = `${this.apiRoot}/teams`;
    return this.http.get(url).map(res => {
      return res.json();
    });
  }

}
