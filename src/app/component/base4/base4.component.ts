import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {OutcomeEvent} from "../../model/outcome-event";

@Component({
  selector: 'app-base4',
  templateUrl: './base4.component.html',
  styleUrls: ['./base4.component.css']
})
export class Base4Component implements OnInit {

  private baseUri = 'assets/base4/';
  private extension = '.svg';

  public top = this.baseUri + 'black' + this.extension;

  imageUris: string[] = [];

  @Input('value')
  public value: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.render();

    //this.demo();
  }

  demo(): void {
    this.value = 0;

    Observable.interval(1000)
      .subscribe(() => {
        this.value = this.value + 1;

        if (this.value > 131071) {
          this.value = 0;
        }

        this.render();
      });
  }

  render(): void {
    this.imageUris = [];
    this.renderBase(this.value, 0);
  }

  renderBase(value: number, base: number): void {
    const remainder = value % 4;
    const nextValue = (value - remainder) / 4;

    //console.log(remainder + ' ' + nextValue);

    if (remainder == 1) {
      this.imageUris.push(this.baseUri + Math.pow(4, base) + this.extension);
    } else if (remainder == 2) {
      this.imageUris.push(this.baseUri + Math.pow(4, base) * 2 + this.extension);
    } else if (remainder == 3) {
      this.imageUris.push(this.baseUri + Math.pow(4, base) + this.extension);
      this.imageUris.push(this.baseUri + Math.pow(4, base) * 2 + this.extension);
    }

    if (value > 0) {
      this.renderBase(nextValue, base + 1);
    }
  }

}
