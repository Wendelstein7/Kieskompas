import { Component } from '@angular/core';
import { CompassService } from 'src/app/services/compass.service';
import { PartyInformationService } from 'src/app/services/party-information.service';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.scss']
})
export class CompassComponent {
  constructor(
    protected compassService: CompassService,
    protected partyInformationService: PartyInformationService,
  ) { }

  protected clamp(input: number, min: number, max: number): number {
    return input < min ? min : input > max ? max : input;
  }

  protected map(current: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
    return ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }
}
