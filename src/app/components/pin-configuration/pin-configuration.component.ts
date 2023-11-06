import { Component } from '@angular/core';
import { CompassService } from 'src/app/services/compass.service';

@Component({
  selector: 'app-pin-configuration',
  templateUrl: './pin-configuration.component.html',
  styleUrls: ['./pin-configuration.component.scss']
})
export class PinConfigurationComponent {
  constructor(public compassService: CompassService) { }
}
