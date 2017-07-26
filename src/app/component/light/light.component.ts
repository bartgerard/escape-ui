import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {

  private baseUri = 'assets/lights/';
  private extension = '.svg';

  @Input('color')
  public color: string = 'green';

  @Input('active')
  public active: boolean = true;

  imageUri: string = this.toUri(this.active);

  constructor() {
  }

  toUri(active: boolean): string {
    return this.baseUri + this.color + '_' + (this.active ? 'on' : 'off') + this.extension;
  }

  ngOnInit() {
    this.imageUri = this.toUri(this.active);
  }

}
