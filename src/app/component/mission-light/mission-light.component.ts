import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Light} from "../../model/light";

@Component({
  selector: 'app-mission-light',
  templateUrl: './mission-light.component.html',
  styleUrls: ['./mission-light.component.css']
})
export class MissionLightComponent implements OnInit {

  lights: Light[] = [];

  constructor(
  ) {
  }

  ngOnInit() {
    this.lights.push(new Light('green', false));
    this.lights.push(new Light('green', false));
    this.lights.push(new Light('green', false));
    this.lights.push(new Light('red', false));
    this.lights.push(new Light('red', false));
    this.lights.push(new Light('red', false));
  }

  public succeed(): void {
    for (let light of this.lights) {
      if (light.color === 'green' && light.active == false) {
        light.active = true;
        break;
      }
    }
  }

  public fail(): void {
    for (let light of this.lights) {
      if (light.color === 'red' && light.active == false) {
        light.active = true;
        break;
      }
    }
  }

}
