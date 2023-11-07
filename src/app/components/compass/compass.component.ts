import { Component } from '@angular/core';
import { CompassService } from 'src/app/services/compass.service';
import { LogoService } from 'src/app/services/logo.service';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.scss']
})
export class CompassComponent {
  constructor(
    protected compassService: CompassService,
    protected logoService: LogoService,
  ) { }
}
