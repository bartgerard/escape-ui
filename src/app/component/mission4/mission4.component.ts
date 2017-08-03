import {Component, OnInit, ViewChild} from '@angular/core';
import {Duration} from "../../model/duration";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import "rxjs/add/observable/interval";
import {TimerService} from "../../service/timer.service";

@Component({
  selector: 'app-mission4',
  templateUrl: './mission4.component.html',
  styleUrls: ['./mission4.component.css'],
  providers: [TimerService]
})
export class Mission4Component implements OnInit {

  public duration: Duration;

  @ViewChild('videoPlayer')
  videoPlayer: any;

  constructor(
    private timerService: TimerService
  ) {
  }

  ngOnInit() {
    this.timerService.delay(1000, () => this.videoPlayer.nativeElement.play());
    this.timerService.start(2, duration => this.duration = duration);
  }

}
