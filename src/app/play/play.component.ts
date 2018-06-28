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

  check() {
    console.log(this.characters);
  }

  /**
   * 文字を入れ替える
   * @param isFocus 選択状態
   */
  changeCharacter(isFocus: boolean): void {
    if (!isFocus) {
      return;
    }
    if (this.characters.filter((char: Character) => char.isFocus).length === 2) {
      // 二つの文字を入れ替える
      const charcters: { index: number, text: string }[] = [];
      this.characters.forEach((char: Character, i: number) => {
        if (char.isFocus) {
          charcters.push({
            index: i,
            text: char.text
          });
        }
      });
      this.characters[charcters[0].index].text = charcters[1].text;
      this.characters[charcters[1].index].text = charcters[0].text;
      this.characters[charcters[0].index].isFocus = this.characters[charcters[1].index].isFocus = false;
    }
  }
}
