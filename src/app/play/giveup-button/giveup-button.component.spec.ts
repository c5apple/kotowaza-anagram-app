import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveupButtonComponent } from './giveup-button.component';
import { environment } from '../../../environments/environment';

describe('GiveupButtonComponent', () => {
  let component: GiveupButtonComponent;
  let fixture: ComponentFixture<GiveupButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GiveupButtonComponent],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
