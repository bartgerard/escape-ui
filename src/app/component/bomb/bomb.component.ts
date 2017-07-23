import {Component, ContentChild, Input, OnInit, ViewChild} from '@angular/core';
import {BeepEvent} from "../../model/beep-event";
import {Observable} from "rxjs/Observable";
import {Outcome} from "../../model/outcome";
import {OutcomeEvent} from "../../model/outcome-event";
import {Light} from "../../model/light";
import {MissionLightComponent} from "../mission-light/mission-light.component";

@Component({
  selector: 'app-bomb',
  templateUrl: './bomb.component.html',
  styleUrls: ['./bomb.component.css']
})
export class BombComponent implements OnInit {

  private audioBeep = new Audio('assets/audio/beep-08b.mp3');
  private audioFailure = new Audio('assets/audio/beep-03.mp3');
  private audioSuccess = new Audio('assets/audio/button-37.mp3');

  @ViewChild(MissionLightComponent)
  missionLights: MissionLightComponent;

  lights: Light[] = [];

  @Input('enableSound')
  public enableSound: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.lights.push(new Light('green', false));
    this.lights.push(new Light('green', false));
    this.lights.push(new Light('green', false));
    this.lights.push(new Light('red', false));
    this.lights.push(new Light('red', false));
    this.lights.push(new Light('red', false));
  }

  onBeep(event: BeepEvent) {
    if (this.enableSound) {
      this.audioBeep.play();
    }
  }

  onOutcome(event: OutcomeEvent) {
    if (event.success) {
      this.audioSuccess.play();
      this.missionLights.succeed();
    } else {
      this.audioFailure.play();
      this.missionLights.fail();
    }
  }

}
