import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Duration} from "../../model/duration";
import {BeepEvent} from "../../model/beep-event";
import {TimeoutEvent} from "../../model/timeout-event";
import {Subscription} from "rxjs/Subscription";
import "rxjs/add/observable/interval";

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  public duration: Duration;

  @Input('enableDays')
  public enableDays: boolean = false;

  @Input('enableHours')
  public enableHours: boolean = false;

  @Input('enableMilliseconds')
  public enableMilliseconds: boolean = true;

  @Output()
  public beep: EventEmitter<BeepEvent> = new EventEmitter<BeepEvent>();

  @Output('timeout')
  private timeout: EventEmitter<TimeoutEvent> = new EventEmitter<TimeoutEvent>();

  private subscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const end = new Date();
    end.setMinutes(end.getMinutes() + 10);

    this.subscription = Observable.interval(1000)
      .subscribe(() => {
        let now = new Date();

        if (now.getTime() > end.getTime()) {
          this.duration = Duration.between(now, now);
          this.subscription.unsubscribe();
          this.timeout.emit(new TimeoutEvent());
        } else {
          this.duration = Duration.between(now, end);
          this.beep.emit(new BeepEvent());
        }
      });
  }

}
