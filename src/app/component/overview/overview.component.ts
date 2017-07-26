import {Component, OnInit} from '@angular/core';
import {Team} from "../../model/team";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  private totalNbMissions = 4;

  private teams: Team[] = [];

  constructor() {
  }

  ngOnInit() {
    this.teams.push(new Team('Alfa', 2));
    this.teams.push(new Team('Beta', 2));
    this.teams.push(new Team('Gamma', 2));
    this.teams.push(new Team('Delta', 2));
  }

}
