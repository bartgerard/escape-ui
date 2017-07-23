import {Outcome} from "./outcome";

export class OutcomeEvent {

  constructor(
    public missionId: number,
    public success: boolean
  ) {
  }

}
