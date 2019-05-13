import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lower2019AprilComponent } from './lower2019-april.component';

describe('Lower2019AprilComponent', () => {
  let component: Lower2019AprilComponent;
  let fixture: ComponentFixture<Lower2019AprilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lower2019AprilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lower2019AprilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
