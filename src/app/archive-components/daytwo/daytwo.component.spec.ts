import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaytwoComponent } from './daytwo.component';

describe('DaytwoComponent', () => {
  let component: DaytwoComponent;
  let fixture: ComponentFixture<DaytwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaytwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
