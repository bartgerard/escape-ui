import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";
import {Duration} from "../../model/duration";

@Component({
  selector: 'app-mission1',
  templateUrl: './mission1.component.html',
  styleUrls: ['./mission1.component.css']
})
export class Mission1Component implements OnInit {

  private duration: Duration;

  @ViewChild('videoPlayer')
  videoPlayer: any;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {

    let subscription: Subscription = Observable.of(0)
      .delay(5000)
      .subscribe(() => {
        //this.videoPlayer.nativeElement.play();
        subscription.unsubscribe();
      });

    let end = new Date();
    end.setMinutes(end.getMinutes() + 2);

    let timer = Observable.interval(1000)
      .subscribe(() => {
        let now = new Date();

        if (now.getTime() > end.getTime()) {
          timer.unsubscribe();
          this.goBack();
        } else {
          this.duration = Duration.between(now, end);
        }
      });
  }

  goBack(): void {
    this.router.navigate(['./start']);
  }

}
