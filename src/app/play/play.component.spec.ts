import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayComponent } from './play.component';
import { environment } from '../../environments/environment';
import { CharacterComponent } from './character/character.component';
import { GiveupButtonComponent } from './giveup-button/giveup-button.component';

describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayComponent,
        CharacterComponent,
        GiveupButtonComponent
      ],
      providers: [
        environment.PlayService,
        environment.QuestionService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
