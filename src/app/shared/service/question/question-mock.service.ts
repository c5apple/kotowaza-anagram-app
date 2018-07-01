import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { QuestionService } from './question.service';

/**
 * 問題サービス
 * モック
 */
@Injectable()
export class QuestionMockService extends QuestionService {

  /**
   * 問題一覧を取得する
   */
  public getQuestions(): Observable<any[]> {
    return Observable.of([
      { kotowaza: '会うは別れの始め', characters: 'あうはわかれのはじめ', mean: '出会ったときから別れは始まっているという意味で、会った人とは必ずいつか別れるものだということ。人生の無常を表している言葉。' },
      { kotowaza: '青菜に塩', characters: 'あおなにしお', mean: '青菜に塩を振り掛けると萎（しお）れてしまうことから転じて、人が、元気を失って萎れたようになっていることを表わす。' },
      { kotowaza: '青は藍より出でて藍よりも青し', characters: 'あおはあいよりいでてあいよりあおし', mean: '教えを受けた者が教えた人よりも優（すぐ）れること。弟子の方が師匠よりも優れること。' },
      { kotowaza: '笑う門には福来たる', characters: 'わらうかどにはふくきたる', mean: 'いつも笑い声が満ち、和気藹々（あいあい）とした家には、自然と幸福が巡ってくるものである。' },
    ]);
  }
}
