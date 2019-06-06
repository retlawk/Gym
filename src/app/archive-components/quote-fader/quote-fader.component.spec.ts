import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFaderComponent } from './quote-fader.component';

describe('QuoteFaderComponent', () => {
  let component: QuoteFaderComponent;
  let fixture: ComponentFixture<QuoteFaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteFaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
