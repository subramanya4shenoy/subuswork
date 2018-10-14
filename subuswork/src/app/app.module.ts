import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FrameWorkModule } from './frame-work/frame-work.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FrameWorkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
