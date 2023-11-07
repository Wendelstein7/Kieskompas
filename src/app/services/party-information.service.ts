/* All trademarks, logos and brand names are the property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names,trademarks and brands does not imply endorsement. */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartyInformationService {

  constructor() { }

  public names: { [key: string]: string } = {
    "BBB": "BoerBurgerBeweging",
    "CU": "ChristenUnie",
    "BVNL": "Belang van Nederland",
    "NSC": "Nieuw Sociaal Contract",
    "JA21": "JA21",
    "PvdA/GL": "Partij van de Arbeid/GroenLinks",
    "DENK": "DENK",
    "FvD": "Forum voor Democratie",
    "PVV": "Partij Voor de Vrijheid",
    "BIJ1": "BIJ1",
    "CDA": "Christen-Democratisch Appèl",
    "Volt": "Volt",
    "SP": "Socialistische Partij",
    "SGP": "Staatkundig Gereformeerde Partij",
    "VVD": "Volkspartij voor Vrijheid en Democratie",
    "D66": "Democraten '66",
    "50PLUS": "50PLUS",
    "PvdD": "Partij voor de Dieren",
  }

  public logos: { [key: string]: string } = {

    'BBB': 'assets/parties/BBB.png',
    'CU': 'assets/parties/CU.png',
    'BVNL': 'assets/parties/BVNL.png',
    'NSC': 'assets/parties/NSC.png',
    'JA21': 'assets/parties/JA21.png',
    'PvdA/GL': 'assets/parties/PvdAGL.png',
    'DENK': 'assets/parties/DENK.png',
    'FvD': 'assets/parties/FvD.png',
    'PVV': 'assets/parties/PVV.png',
    'BIJ1': 'assets/parties/BIJ1.png',
    'CDA': 'assets/parties/CDA.png',
    'Volt': 'assets/parties/Volt.png',
    'SP': 'assets/parties/SP.png',
    'SGP': 'assets/parties/SGP.png',
    'VVD': 'assets/parties/VVD.png',
    'D66': 'assets/parties/D66.png',
    '50PLUS': 'assets/parties/50PLUS.png',
    'PvdD': 'assets/parties/PvdD.png',
  }
}
