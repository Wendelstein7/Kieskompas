import { Component } from '@angular/core';
import { CompassService } from 'src/app/services/compass.service';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.scss']
})
export class CompassComponent {
  constructor(public compassService: CompassService) { }
}
