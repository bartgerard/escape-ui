import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {MissionService} from "../../service/mission.service";
import {Mission} from "../../model/mission";
import {Duration} from "../../model/duration";

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

  constructor(
    public missionService: MissionService
  ) {
    missionService.start();
    this.mission = missionService.mission;

    Observable.interval(100)
      .subscribe(() => {
        let now = new Date();

        if (now.getTime() > this.mission.end.getTime()) {
          this.duration = Duration.between(now, now);
        } else {
          this.duration = Duration.between(now, this.mission.end);
        }
      });
  }

  ngOnInit() {
  }

}
