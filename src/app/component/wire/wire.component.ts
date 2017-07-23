import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wire',
  templateUrl: './wire.component.html',
  styleUrls: ['./wire.component.css']
})
export class WireComponent implements OnInit {

  baseUri = 'assets/wires/';
  extension = '.png';

  wireUris: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.reset();
  }

  reset(): void {
    for (let i = 0; i <= 4; i++) {
      this.wireUris.push(this.baseUri + 'wire_' + i + this.extension);
    }
  }

  cut(index: number): void {
    const tmp = this.wireUris;
    tmp[index] = this.baseUri + 'wire_' + index + '_cut' + this.extension;
    this.wireUris = tmp;
  }

}
