import {Component, OnInit, ViewChild} from '@angular/core';
import {TimerService} from "../../service/timer.service";
import {BombService} from "../../service/bomb.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-doctor-villan',
  templateUrl: './doctor-villan.component.html',
  styleUrls: ['./doctor-villan.component.css'],
  providers: [
    TimerService,
    BombService
  ]
})
export class DoctorVillanComponent implements OnInit {

  @ViewChild('videoPlayer')
  videoPlayer: any;

  constructor(
    private router: Router,
    private timerService: TimerService,
    private bombService: BombService
  ) {
  }

  ngOnInit() {
    this.videoPlayer.nativeElement.play();
    this.timerService.delay(1000, () => this.bombService.activate());
  }

  end(): void {
    this.router.navigate(['./overview']);
  }

}
