import {Injectable} from '@angular/core';
import {Mission2} from "../model/mission2";

@Injectable()
export class MissionService {

  public mission: Mission2

  constructor() {
  }

  start() {
    this.mission = Mission2.of(new Date(), 10);
  }

}
