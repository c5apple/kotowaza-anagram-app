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
    let questions = 'あおなにしお'.split('');

    // シャッフル
    let n = questions.length, t, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = questions[n];
      questions[n] = questions[i];
      questions[i] = t;
    }
    // 問題セット
    questions.forEach(q => {
      this.characters.push(new Character(q));
    });
  }

  /**
   * 答え合わせボタン
   */
  check(): void {
    console.log(this.characters);
    const myAnswer: string = this.characters.map((character: Character) => character.text).join('');

    console.log('myAnswer', myAnswer);
    if ('あおなにしお' === myAnswer) {
      console.log('正解');
    } else {
      console.log('不正解');
    }
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
