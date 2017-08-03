import {Component, OnInit} from '@angular/core';
import {TeamService} from "../../service/team.service";
import {Team} from "../../model/team";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css'],
  providers: [TeamService]
})
export class EndComponent implements OnInit {

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
