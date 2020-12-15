import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectaclesServiceComponent } from './spectacles-service.component';

describe('SpectaclesServiceComponent', () => {
  let component: SpectaclesServiceComponent;
  let fixture: ComponentFixture<SpectaclesServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpectaclesServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectaclesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
