import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompassService {

  constructor() { }


  /* Compass */
  public xAxis: boolean = true;
  public xAxisPos: number = 50;
  public LeftLabel: string = "Links";
  public RightLabel: string = "Rechts";

  public yAxis: boolean = true;
  public yAxisPos: number = 50;
  public TopLabel: string = "Progressief";
  public BottomLabel: string = "Conservatief";

  public resetCompass() {
    this.xAxis = true;
    this.xAxisPos = 50;
    this.LeftLabel = "Links";
    this.RightLabel = "Rechts";

    this.yAxis = true;
    this.yAxisPos = 50;
    this.TopLabel = "Progressief";
    this.BottomLabel = "Conservatief";
  }

  /* Pin */
  public pin: boolean = true;
  public pinX: number = 50;
  public pinY: number = 50;

  public resetPin() {
    this.pin = true;
    this.pinX = 50;
    this.pinY = 50;
  }
}
