import { Component } from '@angular/core';
import { CompassService } from 'src/app/services/compass.service';

@Component({
  selector: 'app-compass-configuration',
  templateUrl: './compass-configuration.component.html',
  styleUrls: ['./compass-configuration.component.scss']
})
export class CompassConfigurationComponent {
  constructor(public compassService: CompassService) { }
}
