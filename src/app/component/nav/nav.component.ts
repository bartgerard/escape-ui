import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {TeamService} from "../../service/team.service";
import {TimerService} from "../../service/timer.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [
    TeamService,
    TimerService
  ]
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    private teamService: TeamService,
    private timerService: TimerService
  ) {
  }

  ngOnInit() {
  }

  start(pin: string, form: NgForm) {
    form.reset();

    if (pin === 'bomb1') {
      this.router.navigate(['./bomb']);
    } else if (pin === 'bomb2') {
      this.router.navigate(['./bomb2']);
    } else if (pin === 'overview') {
      this.router.navigate(['./overview']);
    } else {
      this.teamService.login(pin).subscribe(mission => {
        if (mission !== null) {
          switch (mission.mission) {
            case 'BLACK_MAMBA':
              this.router.navigate(['./mission1']);
              break;
            case 'SPYGLASS':
              this.router.navigate(['./mission2']);
              break;
            case 'DIGITAL_FORTRESS':
              this.router.navigate(['./mission3']);
              break;
            case 'MINOTAUR':
              this.router.navigate(['./mission4']);
              break;
          }
        }
      });
    }
  }

}
