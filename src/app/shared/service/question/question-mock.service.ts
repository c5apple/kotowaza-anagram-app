import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { QuestionService } from './question.service';

/**
 * 問題サービス
 * モック
 */
@Injectable()
export class QuestionMockService extends QuestionService {

  /** エンドポイント */
  protected url = '/assets/json/question.json';
}
