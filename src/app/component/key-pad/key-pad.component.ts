import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-key-pad',
  templateUrl: './key-pad.component.html',
  styleUrls: ['./key-pad.component.css']
})
export class KeyPadComponent implements OnInit {

  private display: string = '';

  @Input('maxLength')
  public maxLength: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  addKey(key: number) {
    if (this.display.length < this.maxLength) {
      this.display += key;
    }
  }

  clear() {
    this.display = '';
  }

  enter() {
    this.display = '';
  }

}
