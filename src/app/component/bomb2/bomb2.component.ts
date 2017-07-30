import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BeepEvent} from "../../model/beep-event";
import {Observable} from "rxjs/Observable";
import {OutcomeEvent} from "../../model/outcome-event";
import {MissionLightComponent} from "../mission-light/mission-light.component";
import {CountdownDarkComponent} from "../countdown-dark/countdown-dark.component";
import {TimeoutEvent} from "../../model/timeout-event";
import {Base4Component} from "../base4/base4.component";
import {BombService} from "../../service/bomb.service";
import "rxjs/add/observable/interval";

@Component({
  selector: 'app-bomb2',
  templateUrl: './bomb2.component.html',
  styleUrls: ['./bomb2.component.css'],
  providers: [BombService]
})
export class Bomb2Component implements OnInit {

  private audioBeep = new Audio('assets/audio/beep-08b.mp3');
  private audioFailure = new Audio('assets/audio/beep-03.mp3');
  private audioSuccess = new Audio('assets/audio/button-37.mp3');
  private bomb = new Audio('assets/audio/bomb-01.mp3');

  @ViewChild(MissionLightComponent)
  private missionLights: MissionLightComponent;

  @ViewChild(CountdownDarkComponent)
  private countdown: CountdownDarkComponent;

  @ViewChild(Base4Component)
  private base4: Base4Component;

  @Input('enableSound')
  public enableSound: boolean = true;

  public active: boolean = false;

  constructor(
    private bombService: BombService
  ) {
  }

  ngOnInit() {
    const subscription = Observable.interval(10000).subscribe(() =>
      this.bombService.isActive().subscribe(isActive => {
        if (isActive && !this.active) {
          this.active = true;
          this.countdown.start();
        } else if (!isActive && this.active) {
          this.active = false;
          this.countdown.stop();
        }
      })
    );
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

      if (this.base4.missionId === event.missionId) {
        this.base4.demo();
      }

      if (this.missionLights.totalSuccesses == this.missionLights.nbSuccesses) {
        this.countdown.stop();
        this.base4.stop();
      }
    } else {
      this.audioFailure.play();
      this.missionLights.fail();

      if (this.missionLights.totalFailures == this.missionLights.nbFailures) {
        this.bomb.play();
      }
    }
  }

  start() {
    this.audioBeep.play();
  }

}
