import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {Duration} from "../model/duration";

@Injectable()
export class TimerService {

  private timer: Subscription = null;

  constructor(
    private router: Router
  ) {
  }

  delay(
    seconds: number,
    observer: () => void
  ): void {
    const delayer: Subscription = Observable.of(0)
      .delay(1000)
      .map(observer)
      .subscribe(() => {
        delayer.unsubscribe();
      });
  }

  start(
    minutes: number,
    observer: (Duration) => void
  ): void {
    const end = new Date();
    end.setMinutes(end.getMinutes() + minutes);

    if (this.timer !== null) {
      this.timer.unsubscribe();
    }

    this.timer = Observable.interval(1000)
      .map(() => {
        let now = new Date();

        if (now.getTime() > end.getTime()) {
          this.timer.unsubscribe();
          this.goBack();
        } else {
          return Duration.between(now, end);
        }
      })
      .subscribe(observer);
  }

  goBack(): void {
    this.router.navigate(['./start']);
  }

}
