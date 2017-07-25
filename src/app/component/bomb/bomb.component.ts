import {Component, ContentChild, Input, OnInit, ViewChild} from '@angular/core';
import {BeepEvent} from "../../model/beep-event";
import {Observable} from "rxjs/Observable";
import {Outcome} from "../../model/outcome";
import {OutcomeEvent} from "../../model/outcome-event";
import {Light} from "../../model/light";
import {MissionLightComponent} from "../mission-light/mission-light.component";
import {CountdownDarkComponent} from "../countdown-dark/countdown-dark.component";
import {TimeoutEvent} from "../../model/timeout-event";

@Component({
  selector: 'app-bomb',
  templateUrl: './bomb.component.html',
  styleUrls: ['./bomb.component.css']
})
export class BombComponent implements OnInit {

  private audioBeep = new Audio('assets/audio/beep-08b.mp3');
  private audioFailure = new Audio('assets/audio/beep-03.mp3');
  private audioSuccess = new Audio('assets/audio/button-37.mp3');
  private bomb = new Audio('assets/audio/bomb-01.mp3');

  @ViewChild(MissionLightComponent)
  private missionLights: MissionLightComponent;

  @ViewChild(CountdownDarkComponent)
  private countdown: CountdownDarkComponent;

  @Input('enableSound')
  public enableSound: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onBeep(event: BeepEvent) {
    if (this.enableSound) {
      this.audioBeep.play();
    }
  }

  onTimeout(event: TimeoutEvent) {
    this.bomb.play();
  }

  onOutcome(event: OutcomeEvent) {
    if (event.success) {
      this.audioSuccess.play();
      this.missionLights.succeed();

      if (this.missionLights.totalSuccesses == this.missionLights.nbSuccesses) {
        this.countdown.stop();
      }
    } else {
      this.audioFailure.play();
      this.missionLights.fail();

      if (this.missionLights.totalFailures == this.missionLights.nbFailures) {
        this.bomb.play();
      }
    }
  }

}
