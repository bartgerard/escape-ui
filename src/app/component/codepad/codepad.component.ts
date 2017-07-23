import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CodeKey} from "../../model/code-key";
import {OutcomeEvent} from "../../model/outcome-event";
import {Outcome} from "../../model/outcome";

@Component({
  selector: 'app-codepad',
  templateUrl: './codepad.component.html',
  styleUrls: ['./codepad.component.css']
})
export class CodepadComponent implements OnInit {

  keys: CodeKey[] = [];

  selectedKeys: CodeKey[] = [];

  @Input('missionId')
  public missionId: number = 0;

  @Output('outcome')
  public outcome: EventEmitter<OutcomeEvent> = new EventEmitter<OutcomeEvent>();

  constructor() {
  }

  ngOnInit() {
    this.keys.push(new CodeKey('€', false, 2));
    this.keys.push(new CodeKey('œ', false, 0));
    this.keys.push(new CodeKey('š', false, 1));
    this.keys.push(new CodeKey('Æ', false, 3));
  }

  click(key: CodeKey): void {
    key.disabled = true;

    if (this.selectedKeys.length != key.order) {
      this.reset();
      this.selectedKeys = [];

      this.outcome.emit(new OutcomeEvent(this.missionId, false));
    } else {
      this.selectedKeys.push(key);

      if (this.selectedKeys.length == this.keys.length) {
        this.outcome.emit(new OutcomeEvent(this.missionId, true));
      }
    }
  }

  reset(): void {
    for (const key of this.keys) {
      key.disabled = false;
    }
  }

}
