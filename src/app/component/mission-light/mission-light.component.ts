import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Light} from "../../model/light";

@Component({
  selector: 'app-mission-light',
  templateUrl: './mission-light.component.html',
  styleUrls: ['./mission-light.component.css']
})
export class MissionLightComponent implements OnInit {

  lights: Light[] = [];

  @Input('totalSuccesses')
  private totalSuccesses = 0;

  @Input('totalFailures')
  private totalFailures = 0;

  private nbSuccesses = 0;

  private nbFailures = 0;

  constructor() {
  }

  ngOnInit() {
    this.lights.push(new Light('green', false));
    this.lights.push(new Light('green', false));
    this.lights.push(new Light('green', false));
    this.lights.push(new Light('red', false));
    this.lights.push(new Light('red', false));
    this.lights.push(new Light('red', false));
  }

  draw(): void {
    this.lights = [];

    for (let i = 0; i < this.totalSuccesses; i++) {
      this.lights.push(new Light('green', i < this.nbSuccesses));
    }
    for (let i = 0; i < this.totalFailures; i++) {
      this.lights.push(new Light('red', i < this.nbFailures));
    }
  }

  public succeed(): void {
    if (this.nbSuccesses < this.totalSuccesses) {
      this.nbSuccesses++;
    }

    this.draw();
  }

  public fail(): void {
    if (this.nbFailures < this.totalFailures) {
      this.nbFailures++;
    }

    this.draw();
  }

}
