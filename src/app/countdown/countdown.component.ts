import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {MissionService} from "../mission.service";
import {Mission} from "../mission";

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  providers: [
    MissionService
  ]
})
export class CountdownComponent implements OnInit {
  private message: number;
  private mission: Mission;

  constructor(
    public missionService: MissionService
  ) {
    missionService.start();
    this.mission = missionService.mission;

    Observable.interval(500)
      .take(10)
      .map((x) => x + 1)
      .subscribe((x: number) => {
        this.message = x;
      });
  }

  ngOnInit() {
  }

}
