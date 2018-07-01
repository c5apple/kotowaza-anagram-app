import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';

/**
 * 問題サービス
 */
@Injectable()
export class QuestionService extends ApiService {

  /** エンドポイント */
  // protected url = './api/question';  // TODO API実装
  protected url = './assets/json/question.json';

  /** 問題 */
  private questions: any[] = [];

  /**
   * 問題一覧を取得する
   */
  public getQuestions(): Observable<any[]> {
    // キャッシュ利用
    if (this.questions.length > 0) {
      return Observable.of(this.questions);
    }

    // API実行
    const params = {};
    return this.get(this.url, params).map(questions => {
      this.questions = questions;
      return questions;
    });
  }
}
