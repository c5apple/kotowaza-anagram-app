import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyAdsenseModule } from './shared/component/my-adsense/my-adsense.module';
import { PlayModule } from './play/play.module';
import { StartModule } from './start/start.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MyAdsenseModule,
    PlayModule,
    StartModule
  ],
  providers: [
    environment.QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
