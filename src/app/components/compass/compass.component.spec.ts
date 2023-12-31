import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassComponent } from './compass.component';

describe('CompassComponent', () => {
  let component: CompassComponent;
  let fixture: ComponentFixture<CompassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompassComponent]
    });
    fixture = TestBed.createComponent(CompassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
