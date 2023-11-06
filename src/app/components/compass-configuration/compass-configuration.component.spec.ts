import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassConfigurationComponent } from './compass-configuration.component';

describe('CompassConfigurationComponent', () => {
  let component: CompassConfigurationComponent;
  let fixture: ComponentFixture<CompassConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompassConfigurationComponent]
    });
    fixture = TestBed.createComponent(CompassConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
