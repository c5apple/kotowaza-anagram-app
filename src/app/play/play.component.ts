import { Component, OnInit } from '@angular/core';

import { Character } from './character/character';

/**
 * プレイ画面
 */
@Component({
  selector: 'kaa-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  /** 文字 */
  characters: Character[] = [];

  constructor() { }

  ngOnInit() {
    this.characters.push(new Character('あ'));
    this.characters.push(new Character('お'));
    this.characters.push(new Character('な'));
    this.characters.push(new Character('に'));
    this.characters.push(new Character('し'));
    this.characters.push(new Character('お'));
  }
}
