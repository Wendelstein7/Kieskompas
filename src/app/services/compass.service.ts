import { Injectable } from '@angular/core';
import { LogoService } from './logo.service';
import { visitAll } from '@angular/compiler';

export interface Party {
  name: string;
  abbr: string;
  logo: string;

  x: number;
  y: number;
  visible: boolean;

  reset?: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class CompassService {

  constructor(
    public logoService: LogoService,
  ) { }


  /* Compass */
  public xAxis: boolean = true;
  public xAxisPos: number = 50;
  public LeftLabel: string = "Links";
  public RightLabel: string = "Rechts";

  public yAxis: boolean = true;
  public yAxisPos: number = 50;
  public TopLabel: string = "Progressief";
  public BottomLabel: string = "Conservatief";

  public backgroundColor: string = "#ffffff";
  public textColor: string = "#404040";
  public lineColor: string = "#999999";

  public resetCompass() {
    this.xAxis = true;
    this.xAxisPos = 50;
    this.LeftLabel = "Links";
    this.RightLabel = "Rechts";

    this.yAxis = true;
    this.yAxisPos = 50;
    this.TopLabel = "Progressief";
    this.BottomLabel = "Conservatief";

    this.backgroundColor = "#ffffff";
    this.textColor = "#404040";
    this.lineColor = "#999999";
  }

  private randomLabels: string[][] = [['Links', 'Rechts'], ['Progressief', 'Conservatief'], ['Intelligent', 'Niet-intelligent'], ['Rijk', 'Arm'], ['Charmant', 'Oncharmant'], ['Pro-auto', 'Pro-fiets'], ['Religieus', 'Seculair'], ['Saai', 'Interresant'], ['Winnaar', 'Loser']];
  public randomizeCompass() {

    this.xAxisPos = Math.floor(Math.random() * 100);
    let labels = this.randomLabels[Math.floor(Math.random() * this.randomLabels.length)];
    if (Math.random() > 0.5) labels = labels.reverse();
    this.LeftLabel = labels[0];
    this.RightLabel = labels[1];

    this.yAxisPos = Math.floor(Math.random() * 100);
    labels = this.randomLabels[Math.floor(Math.random() * this.randomLabels.length)];
    if (Math.random() > 0.5) labels = labels.reverse();
    this.TopLabel = labels[0];
    this.BottomLabel = labels[1];

    // this.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // this.textColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // this.lineColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  /* Pin */
  public pin: boolean = true;
  public pinX: number = 50;
  public pinY: number = 50;

  public pinFlair: boolean = true;
  public pinFlairColor: string = "#dfeff8";

  public resetPin() {
    this.pin = true;
    this.pinX = 50;
    this.pinY = 50;

    this.pinFlair = true;
    this.pinFlairColor = "#dfeff8";
  }

  public randomizePin() {
    this.pinX = Math.floor(Math.random() * 100);
    this.pinY = Math.floor(Math.random() * 100);
    // this.pinFlairColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  /* Parties */
  public parties: Party[] = [
    {
      name: "BoerBurgerBeweging",
      abbr: "BBB",
      logo: this.logoService.BBB,
      x: 49.5,
      y: 66.1,
      visible: true,
      reset: () => {
        this.parties[0].x = 49.5;
        this.parties[0].y = 66.1;
      }
    },
    {
      name: "ChristenUnie",
      abbr: "CU",
      logo: this.logoService.CU,
      x: 29.1,
      y: 34.5,
      visible: true,
      reset: () => {
        this.parties[1].x = 29.1;
        this.parties[1].y = 34.5;
      }
    },
    {
      name: "Belang van Nederland",
      abbr: "BVNL",
      logo: this.logoService.BVNL,
      x: 95.0,
      y: 89.7,
      visible: true,
      reset: () => {
        this.parties[2].x = 95.0;
        this.parties[2].y = 89.7;
      }
    },
    {
      name: "Nieuw Sociaal Contract",
      abbr: "NSC",
      logo: this.logoService.NSC,
      x: 40.5,
      y: 48.9,
      visible: true,
      reset: () => {
        this.parties[3].x = 40.5;
        this.parties[3].y = 48.9;
      }
    },
    {
      name: "JA21",
      abbr: "JA21",
      logo: this.logoService.JA21,
      x: 83.6,
      y: 89.7,
      visible: true,
      reset: () => {
        this.parties[4].x = 83.6;
        this.parties[4].y = 89.7;
      }
    },
    {
      name: "Partij van de Arbeid/GroenLinks",
      abbr: "PvdA/GL",
      logo: this.logoService.PVDA_GL,
      x: 17.7,
      y: 12.1,
      visible: true,
      reset: () => {
        this.parties[5].x = 17.7;
        this.parties[5].y = 12.1;
      }
    },
    {
      name: "DENK",
      abbr: "DENK",
      logo: this.logoService.DENK,
      x: 10.9,
      y: 29.2,
      visible: true,
      reset: () => {
        this.parties[6].x = 10.9;
        this.parties[6].y = 29.2;
      }
    },
    {
      name: "Forum voor Democratie",
      abbr: "FvD",
      logo: this.logoService.FVD,
      x: 76.8,
      y: 91.1,
      visible: true,
      reset: () => {
        this.parties[7].x = 76.8;
        this.parties[7].y = 91.1;
      }
    },
    {
      name: "Partij Voor de Vrijheid",
      abbr: "PVV",
      logo: this.logoService.PVV,
      x: 49.5,
      y: 81.8,
      visible: true,
      reset: () => {
        this.parties[8].x = 49.5;
        this.parties[8].y = 81.8;
      }
    },
    {
      name: "BIJ1",
      abbr: "BIJ1",
      logo: this.logoService.BIJ1,
      x: -2.7,
      y: -1.1,
      visible: true,
      reset: () => {
        this.parties[9].x = -2.7;
        this.parties[9].y = -1.1;
      }
    }, {
      name: "Christen-Democratisch Appèl",
      abbr: "CDA",
      logo: this.logoService.CDA,
      x: 56.4,
      y: 56.8,
      visible: true,
      reset: () => {
        this.parties[10].x = 56.4;
        this.parties[10].y = 56.8;
      }
    }, {
      name: "Volt",
      abbr: "Volt",
      logo: this.logoService.VOLT,
      x: 38.2,
      y: 2.9,
      visible: true,
      reset: () => {
        this.parties[11].x = 38.2;
        this.parties[11].y = 2.9;
      }
    }, {
      name: "Socialistische Partij",
      abbr: "SP",
      logo: this.logoService.SP,
      x: 6.4,
      y: 34.5,
      visible: true,
      reset: () => {
        this.parties[12].x = 6.4;
        this.parties[12].y = 34.5;
      }
    }, {
      name: "Staatkundig Gereformeerde Partij",
      abbr: "SGP",
      logo: this.logoService.SGP,
      x: 58.6,
      y: 66.1,
      visible: true,
      reset: () => {
        this.parties[13].x = 58.6;
        this.parties[13].y = 66.1;
      }
    }, {
      name: "Volkspartij voor Vrijheid en Democratie",
      abbr: "VVD",
      logo: this.logoService.VVD,
      x: 70,
      y: 60.8,
      visible: true,
      reset: () => {
        this.parties[14].x = 70;
        this.parties[14].y = 60.8;
      }
    }, {
      name: "Democraten '66",
      abbr: "D66",
      logo: this.logoService.D66,
      x: 42.7,
      y: 16.1,
      visible: true,
      reset: () => {
        this.parties[15].x = 42.7;
        this.parties[15].y = 16.1;
      }
    }, {
      name: "50PLUS",
      abbr: "50PLUS",
      logo: this.logoService.P50PLUS,
      x: 33.6,
      y: 46.3,
      visible: true,
      reset: () => {
        this.parties[16].x = 33.6;
        this.parties[16].y = 46.3;
      }
    }, {
      name: "Partij voor de Dieren",
      abbr: "PvdD",
      logo: this.logoService.PVDD,
      x: -2.7,
      y: 4.2,
      visible: true,
      reset: () => {
        this.parties[17].x = -2.7;
        this.parties[17].y = 4.2;
      }
    },
  ]

  public resetParties() {
    this.parties.forEach(party => {
      if (party.reset)
        party.reset();
    });
  }

  public randomizeParties() {
    this.parties.forEach(party => {
      party.x = Math.floor(Math.random() * 100) - 5;
      party.y = Math.floor(Math.random() * 100) - 5;
    });
  }
}