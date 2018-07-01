import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsenseModule } from 'ng2-adsense';
import { MyAdsenseComponent } from './my-adsense.component';

@NgModule({
  imports: [
    CommonModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-4398400415874126',
      adSlot: 2790307344
    })
  ],
  declarations: [
    MyAdsenseComponent
  ],
  exports: [
    MyAdsenseComponent
  ]
})
export class MyAdsenseModule { }
