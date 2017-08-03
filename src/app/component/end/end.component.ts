import {Component, OnInit} from '@angular/core';
import {TeamService} from "../../service/team.service";
import {Team} from "../../model/team";
import {TimerService} from "../../service/timer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css'],
  providers: [
    TeamService,
    TimerService
  ]
})
export class EndComponent implements OnInit {

  public teams: Team[] = [];

  constructor(
    private router: Router,
    private teamService: TeamService,
    private timerService: TimerService
  ) {
  }

  ngOnInit() {
    this.refresh();

    this.timerService.delay(10000, () => this.router.navigate(['./incoming_call']));
  }

  refresh(): void {
    this.teamService.teams().subscribe(res => {
      this.teams = res;
    })
  }

}
