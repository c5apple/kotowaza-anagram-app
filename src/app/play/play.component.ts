import { Component, OnInit } from '@angular/core';

import { Character } from './character/character';
import { QuestionService } from '../shared/service/question/question.service';

/**
 * プレイ画面
 */
@Component({
  selector: 'kaa-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  /** 問題 */
  question: any;

  /** 文字 */
  characters: Character[] = [];

  /** 答え */
  answer = '';

  /** 意味 */
  mean = '';

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    // 問題設定
    this.setQuestion();
  }

  /**
   * 問題を設定する
   */
  private setQuestion() {
    this.questionService.getQuestions().subscribe(questions => {
      // 問題選別
      this.question = questions[Math.floor(Math.random() * Math.floor(questions.length))];
      const characters = this.question.characters.split('');
      this.answer = '';
      this.mean = '';

      // 文字シャッフル
      let n = characters.length, t, i;
      while (n) {
        i = Math.floor(Math.random() * n--);
        t = characters[n];
        characters[n] = characters[i];
        characters[i] = t;
      }
      // 問題文字列セット
      this.characters = [];
      characters.forEach(q => {
        this.characters.push(new Character(q));
      });
    });
  }

  /**
   * ヒントボタン
   */
  hint(): void {
    // 意味セット
    this.mean = this.question.mean;
  }

  /**
   * 答え合わせボタン
   */
  check(): void {
    // 答えセット
    this.answer = this.question.kotowaza + '（' + this.question.characters + '）';

    const myAnswer: string = this.characters.map((character: Character) => character.text).join('');
    if (this.question.characters === myAnswer) {
      console.log('正解');
    } else {
      console.log('不正解');
    }

    // ヒント表示
    this.hint();
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

  /**
   * 次の問題へボタン
   */
  next(): void {
    // 問題設定
    this.setQuestion();
  }
}
