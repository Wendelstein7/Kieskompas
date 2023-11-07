import { Injectable } from '@angular/core';
import { CompassService } from './compass.service';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor(
    private compassService: CompassService,
  ) { }

  private randomLabels: string[][] = [
    ['Links', 'Rechts'],
    ['Progressief', 'Conservatief'],
    ['Intelligent', 'Niet-intelligent'],
    ['Rijk', 'Arm'],
    ['Charmant', 'Oncharmant'],
    ['Pro-auto', 'Pro-fiets'],
    ['Religieus', 'Seculier'],
    ['Saai', 'Interresant'],
    ['Winnaar', 'Loser'],
    ['Vooruitstrevend', 'Traditioneel'],
    ['Groot', 'Klein'],
    ['Veganistisch', 'Carnivoristisch'],
    ['Digitaal', 'Analoog'],
    ['Oplossend', 'Ontwijkend'],
    ['Langetermijngericht', 'Kortetermijngericht'],
    ['Complex', 'Simpel'],
    ['Consistent', 'Wispelturig'],
    ['Theoretisch', 'Praktisch'],
  ];
  public randomizeCompass() {
    this.compassService.compass.xAxisPos = Math.floor(Math.random() * 100);
    let labels = this.randomLabels[Math.floor(Math.random() * this.randomLabels.length)];
    if (Math.random() > 0.5) labels = labels.reverse();
    this.compassService.compass.LeftLabel = labels[0];
    this.compassService.compass.RightLabel = labels[1];

    this.compassService.compass.yAxisPos = Math.floor(Math.random() * 100);
    labels = this.randomLabels[Math.floor(Math.random() * this.randomLabels.length)];
    if (Math.random() > 0.5) labels = labels.reverse();
    this.compassService.compass.TopLabel = labels[0];
    this.compassService.compass.BottomLabel = labels[1];

    // this.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // this.textColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // this.lineColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  public randomizeCompassWithAnimation() {
    let xTarget = Math.floor(Math.random() * 100);
    let yTarget = Math.floor(Math.random() * 100);
    let xStep = (xTarget - this.compassService.compass.xAxisPos) / 50;
    let yStep = (yTarget - this.compassService.compass.yAxisPos) / 50;

    let interval = setInterval(() => {
      this.compassService.compass.xAxisPos += xStep;
      this.compassService.compass.yAxisPos += yStep;
    }, 5);

    setTimeout(() => {
      clearInterval(interval);
      this.compassService.compass.xAxisPos = xTarget;
      this.compassService.compass.yAxisPos = yTarget;
    }, 250);

    let labels = this.randomLabels[Math.floor(Math.random() * this.randomLabels.length)];
    if (Math.random() > 0.5) labels = labels.reverse();
    this.compassService.compass.LeftLabel = labels[0];
    this.compassService.compass.RightLabel = labels[1];

    labels = this.randomLabels[Math.floor(Math.random() * this.randomLabels.length)];
    if (Math.random() > 0.5) labels = labels.reverse();
    this.compassService.compass.TopLabel = labels[0];
    this.compassService.compass.BottomLabel = labels[1];
  }


  public randomizePin() {
    this.compassService.pin.pinX = Math.floor(Math.random() * 100);
    this.compassService.pin.pinY = Math.floor(Math.random() * 100);

    // this.pinFlairColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  public randomizePinWithAnimation() {
    let xTarget = Math.floor(Math.random() * 100);
    let yTarget = Math.floor(Math.random() * 100);
    let xStep = (xTarget - this.compassService.pin.pinX) / 50;
    let yStep = (yTarget - this.compassService.pin.pinY) / 50;

    let interval = setInterval(() => {
      this.compassService.pin.pinX += xStep;
      this.compassService.pin.pinY += yStep;
    }, 5);

    setTimeout(() => {
      clearInterval(interval);
      this.compassService.pin.pinX = xTarget;
      this.compassService.pin.pinY = yTarget;
    }, 250);
  }


  public randomizeParties() {
    this.compassService.parties.forEach(party => {
      party.x = Math.floor(Math.random() * 100) - 5;
      party.y = Math.floor(Math.random() * 100) - 5;
    });
  }
}
