import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stop-light',
  templateUrl: './stop-light.component.html',
  styleUrls: ['./stop-light.component.css']
})
export class StopLightComponent implements OnInit {

  @Input('active')
  active: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
