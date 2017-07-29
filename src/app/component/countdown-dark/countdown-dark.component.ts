import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MissionService} from "../../service/mission.service";
import {Mission} from "../../model/mission";
import {Duration} from "../../model/duration";
import {Observable} from "rxjs/Observable";
import {BeepEvent} from "../../model/beep-event";
import {Subscription} from "rxjs/Subscription";
import {TimeoutEvent} from "../../model/timeout-event";

@Component({
  selector: 'app-countdown-dark',
  templateUrl: './countdown-dark.component.html',
  styleUrls: ['./countdown-dark.component.css']
})
export class CountdownDarkComponent implements OnInit {
  private duration: Duration;

  @Input('enableDays')
  private enableDays: boolean = false;

  @Input('enableHours')
  private enableHours: boolean = false;

  @Input('enableMilliseconds')
  private enableMilliseconds: boolean = true;

  @Output('beep')
  private beep: EventEmitter<BeepEvent> = new EventEmitter<BeepEvent>();

  @Output('timeout')
  private timeout: EventEmitter<TimeoutEvent> = new EventEmitter<TimeoutEvent>();

  private subscription: Subscription;

  constructor() {
  }

  ngOnInit() {
  }

  start() {
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

  tick(): void {
    this.beep.emit(new BeepEvent());
  }

  stop(): void {
    this.subscription.unsubscribe();
  }

}
