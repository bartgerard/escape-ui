export class MissionResult {

  constructor(
    public missionName: string,
    public status: string,
    public score: number,
    public bonus: number,
    public duration: number
  ) {
  }

}
