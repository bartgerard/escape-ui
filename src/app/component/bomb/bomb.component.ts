import {Component, Input, OnInit} from '@angular/core';
import {BeepEvent} from "../../model/beep-event";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-bomb',
  templateUrl: './bomb.component.html',
  styleUrls: ['./bomb.component.css']
})
export class BombComponent implements OnInit {

  private audio = new Audio('assets/audio/beep-08b.mp3');

  @Input('enableSound')
  public enableSound: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onBeep(event: BeepEvent) {
    if (this.enableSound) {
      this.audio.play();
    }
  }

}
