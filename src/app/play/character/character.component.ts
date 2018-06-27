import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * 文字コンポーネント
 */
@Component({
  selector: 'kaa-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  /** 文字 */
  @Input() char: string;

  /** 選択状態 */
  @Input() isForcus: boolean;
  @Output() isForcusChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * 選択状態を変える
   */
  triggerFocus(): void {
    this.isForcus = !this.isForcus;
    this.isForcusChange.emit(this.isForcus);
  }
}
