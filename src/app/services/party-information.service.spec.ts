import { TestBed } from '@angular/core/testing';

import { PartyInformationService } from './party-information.service';

describe('partyInformationService', () => {
  let service: PartyInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
