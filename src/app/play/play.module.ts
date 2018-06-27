import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PlayComponent
  ],
  declarations: [PlayComponent, CharacterComponent]
})
export class PlayModule { }
