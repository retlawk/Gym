import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Upper2019AprilComponent } from './upper2019-april.component';

describe('Upper2019AprilComponent', () => {
  let component: Upper2019AprilComponent;
  let fixture: ComponentFixture<Upper2019AprilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Upper2019AprilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Upper2019AprilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
