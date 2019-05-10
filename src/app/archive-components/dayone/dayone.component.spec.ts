import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayoneComponent } from './dayone.component';

describe('DayoneComponent', () => {
  let component: DayoneComponent;
  let fixture: ComponentFixture<DayoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
