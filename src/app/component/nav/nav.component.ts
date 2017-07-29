import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ButtonModule} from "primeng/primeng";
import {NgForm} from "@angular/forms";
import {TeamService} from "../../service/team.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [TeamService]
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    private teamService: TeamService
  ) {
  }

  ngOnInit() {
  }

  start(pin: string, form: NgForm) {
    form.reset();

    switch (pin) {
      case '1':
        this.router.navigate(['./mission1']);
        break;
      case '2':
        this.router.navigate(['./mission2']);
        break;
      case '3':
        this.router.navigate(['./mission3']);
        break;
      case '4':
        this.router.navigate(['./mission4']);
        break;
    }
  }

}
