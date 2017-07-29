import {Mission} from "./mission";
import {MissionResult} from "./mission-result";

export class Team {

  constructor(
    public name: string,
    public nbMissions: number = 0,
    public totalNbMissions: number = 0,
    public score: number = 0,
    public duration: number = 0,
    public totalDuration: number = 0,
    public currentMission: MissionResult,
    public results: MissionResult[] = []
  ) {
  }

}
