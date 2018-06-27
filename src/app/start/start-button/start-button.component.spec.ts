import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartButtonComponent } from './start-button.component';

describe('StartButtonComponent', () => {
  let component: StartButtonComponent;
  let fixture: ComponentFixture<StartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
