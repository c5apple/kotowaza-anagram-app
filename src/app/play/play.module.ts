import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play.component';
import { CharacterComponent } from './character/character.component';
import { GiveupButtonComponent } from './giveup-button/giveup-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PlayComponent
  ],
  declarations: [PlayComponent, CharacterComponent, GiveupButtonComponent]
})
export class PlayModule { }
