import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {MissionService} from "../../service/mission.service";
import {Mission} from "../../model/mission";
import {Duration} from "../../model/duration";
import {BeepEvent} from "../../model/beep-event";

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  providers: [
    MissionService
  ]
})
export class CountdownComponent implements OnInit {
  private mission: Mission;
  private duration: Duration;

  @Input('enableDays')
  public enableDays: boolean = false;

  @Input('enableHours')
  public enableHours: boolean = false;

  @Input('enableMilliseconds')
  public enableMilliseconds: boolean = true;

  @Output()
  public beep: EventEmitter<BeepEvent> = new EventEmitter<BeepEvent>();

  constructor(
    public missionService: MissionService
  ) {
  }

  ngOnInit() {
    this.missionService.start();
    this.mission = this.missionService.mission;

    Observable.interval(100)
      .subscribe(() => {
        let now = new Date();

        if (now.getTime() > this.mission.end.getTime()) {
          this.duration = Duration.between(now, now);
        } else {
          this.duration = Duration.between(now, this.mission.end);
        }
      });

    Observable.interval(1000)
      .subscribe(() => {
        let now = new Date();

        if (now.getTime() < this.mission.end.getTime()) {
          this.beep.emit(new BeepEvent());
        }
      });
  }

}
