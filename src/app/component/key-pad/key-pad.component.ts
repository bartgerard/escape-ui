import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OutcomeEvent} from "../../model/outcome-event";

@Component({
  selector: 'app-key-pad',
  templateUrl: './key-pad.component.html',
  styleUrls: ['./key-pad.component.css']
})
export class KeyPadComponent implements OnInit {

  private display: string = '';

  @Input('maxLength')
  public maxLength: number = 0;

  @Input('value')
  public value: number = 0;

  @Input('missionId')
  public missionId: number = 0;

  @Output('outcome')
  private outcome: EventEmitter<OutcomeEvent> = new EventEmitter<OutcomeEvent>();

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
    if (this.display === '' + this.value) {
      this.value = null;
      this.outcome.emit(new OutcomeEvent(this.missionId, true));
    } else {
      this.outcome.emit(new OutcomeEvent(this.missionId, false));
    }

    this.display = '';
  }

}
