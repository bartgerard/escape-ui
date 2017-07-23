import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-base4',
  templateUrl: './base4.component.html',
  styleUrls: ['./base4.component.css']
})
export class Base4Component implements OnInit {

  baseUri = 'assets/base4/';
  extension = '.svg';

  top = this.baseUri + 'black' + this.extension

  @Input('value')
  public value: number = 0;

  imageUris: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.imageUris = [];

    this.renderBase(this.value, 0);
  }

  renderBase(value: number, base: number): void {
    const remainder = value % 4;
    const nextValue = (value - remainder) / 4;

    console.log(remainder + ' ' + nextValue);

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
