import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BombService {

  //apiRoot: string = "http://192.168.0.178:8080";

  constructor(
    private http: Http
  ) {
  }

  public isActive(): Observable<boolean> {
    const url = `http://${location.hostname}:8080/bombs/activated`;
    return this.http.get(url).map(res => res.text() === 'true');
  }

}
