import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

/**
 * 文字コンポーネント
 */
@Component({
  selector: 'kaa-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnChanges {

  /** 文字 */
  @Input() char: string;

  /** 選択状態 */
  @Input() isFocus: boolean;
  @Output() isFocusChange = new EventEmitter<boolean>();

  /** アニメーションする */
  onAnimated: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 文字が変更された場合
    if (changes.char !== undefined && changes.char.currentValue !== changes.char.previousValue) {
      this.isFocus = false;
      this.onAnimated = true;
    }
  }

  /**
   * 
   */
  onAnimateEnd() {
    console.log('aaa');
    this.onAnimated = false;
  }

  /**
   * 選択状態を変える
   */
  triggerFocus(): void {
    this.isFocus = !this.isFocus;
    this.isFocusChange.emit(this.isFocus);
  }
}
