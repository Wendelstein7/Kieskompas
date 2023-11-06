import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyConfigurationComponent } from './party-configuration.component';

describe('PartyConfigurationComponent', () => {
  let component: PartyConfigurationComponent;
  let fixture: ComponentFixture<PartyConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartyConfigurationComponent]
    });
    fixture = TestBed.createComponent(PartyConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
