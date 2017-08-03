import {Component, OnInit, ViewChild} from '@angular/core';
import {Duration} from "../../model/duration";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import "rxjs/add/observable/interval";
import {TimerService} from "../../service/timer.service";

@Component({
  selector: 'app-mission2',
  templateUrl: './mission2.component.html',
  styleUrls: ['./mission2.component.css'],
  providers: [TimerService]
})
export class Mission2Component implements OnInit {

  public duration: Duration;

  @ViewChild('videoPlayer')
  videoPlayer: any;

  constructor(
    private timerService: TimerService
  ) {
  }

  ngOnInit() {

    let subscription: Subscription = Observable.of(0)
      .delay(1000)
      .subscribe(() => {
        //this.videoPlayer.nativeElement.play();
        subscription.unsubscribe();
      });

    this.timerService.start(2, duration => this.duration = duration);
  }

}
