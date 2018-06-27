import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { StartButtonComponent } from './start-button/start-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    StartComponent
  ],
  declarations: [StartComponent, StartButtonComponent]
})
export class StartModule { }
