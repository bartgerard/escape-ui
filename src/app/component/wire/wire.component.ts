import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OutcomeEvent} from "../../model/outcome-event";

@Component({
  selector: 'app-wire',
  templateUrl: './wire.component.html',
  styleUrls: ['./wire.component.css']
})
export class WireComponent implements OnInit {

  private baseUri = 'assets/wires/';
  private extension = '.png';

  public wireUris: string[] = [];

  private correctWires: boolean[] = [true, false, false, true, false];

  @Input('missionId')
  public missionId: number = 0;

  @Output('outcome')
  public outcome: EventEmitter<OutcomeEvent> = new EventEmitter<OutcomeEvent>();

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

    if (this.correctWires[index]) {
      this.correctWires[index] = false;

      for (let correctWire of this.correctWires) {
        if (correctWire) {
          return;
        }
      }

      this.outcome.emit(new OutcomeEvent(this.missionId, true));
    } else {
      this.outcome.emit(new OutcomeEvent(this.missionId, false));
    }
  }

}
