import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/**
 * プレイサービス
 */
@Injectable()
export class PlayService {

  constructor() { }

  /** 開始状態検知 */
  public isStart = new BehaviorSubject<boolean>(null);

  /**
   * 開始する
   */
  public start() {
    this.isStart.next(true);
  }

  /**
   * 終了する
   */
  public end() {
    this.isStart.next(false);
  }
}
