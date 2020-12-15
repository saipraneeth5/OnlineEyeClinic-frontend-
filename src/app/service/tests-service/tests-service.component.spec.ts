import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsServiceComponent } from './tests-service.component';

describe('TestsServiceComponent', () => {
  let component: TestsServiceComponent;
  let fixture: ComponentFixture<TestsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
