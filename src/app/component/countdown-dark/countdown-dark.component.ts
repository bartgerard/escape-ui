import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MissionService} from "../../service/mission.service";
import {Mission} from "../../model/mission";
import {Duration} from "../../model/duration";
import {Observable} from "rxjs/Observable";
import {BeepEvent} from "../../model/beep-event";

@Component({
  selector: 'app-countdown-dark',
  templateUrl: './countdown-dark.component.html',
  styleUrls: ['./countdown-dark.component.css'],
  providers: [
    MissionService
  ]
})
export class CountdownDarkComponent implements OnInit {
  private mission: Mission;
  private duration: Duration;

  @Input('enableDays')
  public enableDays: boolean = false;

  @Input('enableHours')
  public enableHours: boolean = false;

  @Input('enableMilliseconds')
  public enableMilliseconds: boolean = true;

  @Output('beep')
  public beep: EventEmitter<BeepEvent> = new EventEmitter<BeepEvent>();

  constructor(
    public missionService: MissionService
  ) {
  }

  ngOnInit() {
    this.missionService.start();
    this.mission = this.missionService.mission;

    Observable.interval(1000)
      .subscribe(() => {
        let now = new Date();

        if (now.getTime() > this.mission.end.getTime()) {
          this.duration = Duration.between(now, now);
        } else {
          this.duration = Duration.between(now, this.mission.end);
          this.beep.emit(new BeepEvent());
        }
      });

    Observable.interval(1000)
      .subscribe(() => {
        let now = new Date();

        if (now.getTime() < this.mission.end.getTime()) {
        }
      });
  }

  tick() {
    this.beep.emit(new BeepEvent());
  }

}
