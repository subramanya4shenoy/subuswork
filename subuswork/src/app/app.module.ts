import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FrameWorkModule } from './frame-work/frame-work.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    FrameWorkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
