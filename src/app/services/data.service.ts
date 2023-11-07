import { Injectable } from '@angular/core';
import { Compass, CompassService, Party, Pin } from './compass.service';
import { RandomService } from './random.service';

export interface StoredData {
  compass: Compass;
  pin: Pin;
  parties: Party[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    public compassService: CompassService,
    public randomService: RandomService,
  ) { }

  public saveToLocalStorage() {
    let data: StoredData = {
      compass: this.compassService.compass,
      pin: this.compassService.pin,
      parties: this.compassService.parties,
    };

    localStorage.setItem('data', JSON.stringify(data));
  }

  public loadFromLocalStorage() {
    let dataString = localStorage.getItem('data');
    if (!dataString)
      return;

    let data: StoredData = JSON.parse(dataString);
    if (!data)
      return;

    this.compassService.compass = data.compass;
    this.compassService.pin = data.pin;
    this.compassService.parties = data.parties;
  }

  public getBase64Data(): string {
    let data: StoredData = {
      compass: this.compassService.compass,
      pin: this.compassService.pin,
      parties: this.compassService.parties,
    };

    return btoa(JSON.stringify(data));
  }

  public loadFromBase64Data(dataString: string) {
    let data: StoredData = JSON.parse(atob(dataString));
    if (!data)
      return;

    this.compassService.compass = data.compass;
    this.compassService.pin = data.pin;
    this.compassService.parties = data.parties;
  }
}
