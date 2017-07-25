import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {OutcomeEvent} from "../../model/outcome-event";
import {Subscription} from "rxjs/Subscription";

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
  private value: number = 0;

  @Input('missionId')
  public missionId: number = 0;

  private subscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.render();
  }

  demo(): void {
    this.subscription = Observable.interval(1000)
      .subscribe(() => {
        this.value = this.value + 1;

        if (this.value > 131071) {
          this.value = 0;
        }

        this.render();
      });
  }

  stop(): void {
    this.subscription.unsubscribe();
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
