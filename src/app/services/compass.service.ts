import { Injectable } from '@angular/core';
import { PartyInformationService } from './party-information.service';
import { visitAll } from '@angular/compiler';

export interface Party {
  abbr: string;
  x: number;
  y: number;
  visible: boolean;
}

export interface Compass {
  name: string;

  xAxis: boolean;
  xAxisPos: number;
  LeftLabel: string;
  RightLabel: string;

  yAxis: boolean;
  yAxisPos: number;
  TopLabel: string;
  BottomLabel: string;

  backgroundColor: string;
  textColor: string;
  lineColor: string;
}

export interface Pin {
  pin: boolean;
  pinX: number;
  pinY: number;

  pinFlair: boolean;
  pinFlairColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompassService {

  constructor(
    public partyInformationService: PartyInformationService,
  ) {
    this.parties.forEach(party => {
      this.partiesOriginal.push(structuredClone(party));
    });

    this.compassOriginal = structuredClone(this.compass);

    this.pinOriginal = structuredClone(this.pin);
  }

  public resetAll() {
    this.resetCompass();
    this.resetPin();
    this.resetParties();
  }

  /* Compass */
  private compassOriginal?: Compass;
  public compass: Compass = {
    name: "Mijn kieskompas",

    xAxis: true,
    xAxisPos: 50,
    LeftLabel: "Links",
    RightLabel: "Rechts",

    yAxis: true,
    yAxisPos: 50,
    TopLabel: "Progressief",
    BottomLabel: "Conservatief",

    backgroundColor: "#ffffff",
    textColor: "#404040",
    lineColor: "#999999",
  };

  public resetCompass() {
    if (this.compassOriginal)
      this.compass = structuredClone(this.compassOriginal);
  }

  /* Pin */
  private pinOriginal?: Pin;
  public pin: Pin = {
    pin: true,
    pinX: 50,
    pinY: 50,

    pinFlair: true,
    pinFlairColor: "#dfeff8",
  };

  public resetPin() {
    if (this.pinOriginal)
      this.pin = structuredClone(this.pinOriginal);
  }



  /* Parties */
  public partiesOriginal: Party[] = [];
  public parties: Party[] = [
    {
      abbr: "BBB",
      x: 49.5,
      y: 66.1,
      visible: true,
    },
    {
      abbr: "CU",
      x: 29.1,
      y: 34.5,
      visible: true,
    },
    {
      abbr: "BVNL",
      x: 95.0,
      y: 89.7,
      visible: true,
    },
    {
      abbr: "NSC",
      x: 40.5,
      y: 48.9,
      visible: true,
    },
    {
      abbr: "JA21",
      x: 83.6,
      y: 89.7,
      visible: true,
    },
    {
      abbr: "PvdA/GL",
      x: 17.7,
      y: 12.1,
      visible: true,
    },
    {
      abbr: "DENK",
      x: 10.9,
      y: 29.2,
      visible: true,
    },
    {
      abbr: "FvD",
      x: 76.8,
      y: 91.1,
      visible: true,
    },
    {
      abbr: "PVV",
      x: 49.5,
      y: 81.8,
      visible: true,
    },
    {
      abbr: "BIJ1",
      x: -2.7,
      y: -1.1,
      visible: true,
    },
    {
      abbr: "CDA",
      x: 56.4,
      y: 56.8,
      visible: true,
    },
    {
      abbr: "Volt",
      x: 38.2,
      y: 2.9,
      visible: true,

    },
    {
      abbr: "SP",
      x: 6.4,
      y: 34.5,
      visible: true,

    },
    {
      abbr: "SGP",
      x: 58.6,
      y: 66.1,
      visible: true,

    },
    {
      abbr: "VVD",
      x: 70,
      y: 60.8,
      visible: true,

    },
    {
      abbr: "D66",
      x: 42.7,
      y: 16.1,
      visible: true,

    },
    {
      abbr: "50PLUS",
      x: 33.6,
      y: 46.3,
      visible: true,

    },
    {
      abbr: "PvdD",
      x: -2.7,
      y: 4.2,
      visible: true,
    },
  ]

  public resetParty(party: Party) {
    let original = this.partiesOriginal.find(p => p.abbr == party.abbr);
    if (original) {
      party.x = original.x;
      party.y = original.y;
      party.visible = original.visible;
    }
  }

  public resetParties() {
    this.parties.forEach(party => {
      this.resetParty(party);
    });
  }

}