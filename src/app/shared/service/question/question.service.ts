import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';

/**
 * 問題サービス
 */
@Injectable()
export class QuestionService extends ApiService {

  /**
   * 問題一覧を取得する
   */
  public getQuestions(): Observable<any[]> {
    // API実行
    const url = './api/question';
    const params = {};
    return this.get(url, params);
  }
}
