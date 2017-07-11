import {Injectable} from '@angular/core';
import {Mission} from "./mission";

@Injectable()
export class MissionService {

  public mission: Mission

  constructor() {
  }

  start() {
    this.mission = Mission.of(new Date(), 5);
  }

}
