import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinConfigurationComponent } from './pin-configuration.component';

describe('PinConfigurationComponent', () => {
  let component: PinConfigurationComponent;
  let fixture: ComponentFixture<PinConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinConfigurationComponent]
    });
    fixture = TestBed.createComponent(PinConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
