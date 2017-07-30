import {Component, OnInit} from '@angular/core';
import {Team} from "../../model/team";
import {TeamService} from "../../service/team.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [TeamService]
})
export class OverviewComponent implements OnInit {

  public teams: Team[] = [];

  constructor(
    private teamService: TeamService
  ) {
  }

  ngOnInit() {
    this.refresh();

    Observable.interval(10000).subscribe(() => {
      this.refresh();
    });
  }

  refresh(): void {
    this.teamService.teams().subscribe(res => {
      this.teams = res;
    })
  }

}
