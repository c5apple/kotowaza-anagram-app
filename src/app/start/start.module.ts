import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    StartComponent
  ],
  declarations: [StartComponent, StartButtonComponent]
})
export class StartModule { }
