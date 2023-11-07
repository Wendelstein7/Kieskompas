import { Component } from '@angular/core';
import { CompassService } from 'src/app/services/compass.service';
import { PartyInformationService } from 'src/app/services/party-information.service';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-party-configuration',
  templateUrl: './party-configuration.component.html',
  styleUrls: ['./party-configuration.component.scss']
})
export class PartyConfigurationComponent {
  constructor(
    public compassService: CompassService,
    public randomService: RandomService,
    public partyInformationService: PartyInformationService,
  ) { }
}
