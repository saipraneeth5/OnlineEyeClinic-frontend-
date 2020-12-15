import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientServiceComponent } from './patient-service.component';

describe('PatientServiceComponent', () => {
  let component: PatientServiceComponent;
  let fixture: ComponentFixture<PatientServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
