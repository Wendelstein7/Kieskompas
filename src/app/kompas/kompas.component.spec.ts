import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KompasComponent } from './kompas.component';

describe('KompasComponent', () => {
  let component: KompasComponent;
  let fixture: ComponentFixture<KompasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KompasComponent]
    });
    fixture = TestBed.createComponent(KompasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
