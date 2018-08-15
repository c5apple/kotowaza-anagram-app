import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartButtonComponent } from './start-button.component';
import { environment } from '../../../environments/environment';

describe('StartButtonComponent', () => {
  let component: StartButtonComponent;
  let fixture: ComponentFixture<StartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StartButtonComponent],
      providers: [
        environment.PlayService
      ]
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
