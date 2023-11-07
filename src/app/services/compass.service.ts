import { Injectable } from '@angular/core';
import { LogoService } from './logo.service';
import { visitAll } from '@angular/compiler';

export interface Party {
  name: string;
  abbr: string;
  // logo: string;

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
    public logoService: LogoService,
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
    name: "Mijn verbeterde kieskompas",

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
      name: "BoerBurgerBeweging",
      abbr: "BBB",
      //logo: this.logoService.BBB,
      x: 49.5,
      y: 66.1,
      visible: true,
    },
    {
      name: "ChristenUnie",
      abbr: "CU",
      // logo: this.logoService.CU,
      x: 29.1,
      y: 34.5,
      visible: true,
    },
    {
      name: "Belang van Nederland",
      abbr: "BVNL",
      // logo: this.logoService.BVNL,
      x: 95.0,
      y: 89.7,
      visible: true,
    },
    {
      name: "Nieuw Sociaal Contract",
      abbr: "NSC",
      // logo: this.logoService.NSC,
      x: 40.5,
      y: 48.9,
      visible: true,
    },
    {
      name: "JA21",
      abbr: "JA21",
      // logo: this.logoService.JA21,
      x: 83.6,
      y: 89.7,
      visible: true,
    },
    {
      name: "Partij van de Arbeid/GroenLinks",
      abbr: "PvdA/GL",
      // logo: this.logoService.PVDA_GL,
      x: 17.7,
      y: 12.1,
      visible: true,
    },
    {
      name: "DENK",
      abbr: "DENK",
      // logo: this.logoService.DENK,
      x: 10.9,
      y: 29.2,
      visible: true,
    },
    {
      name: "Forum voor Democratie",
      abbr: "FvD",
      // logo: this.logoService.FVD,
      x: 76.8,
      y: 91.1,
      visible: true,
    },
    {
      name: "Partij Voor de Vrijheid",
      abbr: "PVV",
      // logo: this.logoService.PVV,
      x: 49.5,
      y: 81.8,
      visible: true,
    },
    {
      name: "BIJ1",
      abbr: "BIJ1",
      // logo: this.logoService.BIJ1,
      x: -2.7,
      y: -1.1,
      visible: true,
    },
    {
      name: "Christen-Democratisch Appèl",
      abbr: "CDA",
      // logo: this.logoService.CDA,
      x: 56.4,
      y: 56.8,
      visible: true,
    },
    {
      name: "Volt",
      abbr: "Volt",
      // logo: this.logoService.VOLT,
      x: 38.2,
      y: 2.9,
      visible: true,

    },
    {
      name: "Socialistische Partij",
      abbr: "SP",
      // logo: this.logoService.SP,
      x: 6.4,
      y: 34.5,
      visible: true,

    },
    {
      name: "Staatkundig Gereformeerde Partij",
      abbr: "SGP",
      // logo: this.logoService.SGP,
      x: 58.6,
      y: 66.1,
      visible: true,

    },
    {
      name: "Volkspartij voor Vrijheid en Democratie",
      abbr: "VVD",
      // logo: this.logoService.VVD,
      x: 70,
      y: 60.8,
      visible: true,

    },
    {
      name: "Democraten '66",
      abbr: "D66",
      // logo: this.logoService.D66,
      x: 42.7,
      y: 16.1,
      visible: true,

    },
    {
      name: "50PLUS",
      abbr: "50PLUS",
      // logo: this.logoService.P50PLUS,
      x: 33.6,
      y: 46.3,
      visible: true,

    },
    {
      name: "Partij voor de Dieren",
      abbr: "PvdD",
      // logo: this.logoService.PVDD,
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