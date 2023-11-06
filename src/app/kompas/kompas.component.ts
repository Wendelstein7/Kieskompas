import { Component } from '@angular/core';
import { CompassService } from '../services/compass.service';

@Component({
  selector: 'app-kompas',
  templateUrl: './kompas.component.html',
  styleUrls: ['./kompas.component.scss']
})
export class KompasComponent {
  constructor(public compassService: CompassService) { }
}
