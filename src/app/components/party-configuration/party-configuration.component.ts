import { Component } from '@angular/core';
import { CompassService } from 'src/app/services/compass.service';

@Component({
  selector: 'app-party-configuration',
  templateUrl: './party-configuration.component.html',
  styleUrls: ['./party-configuration.component.scss']
})
export class PartyConfigurationComponent {
  constructor(public compassService: CompassService) { }
}
