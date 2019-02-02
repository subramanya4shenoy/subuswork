import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FrameWorkModule } from './frame-work/frame-work.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBi3XOyybCRzwewmrZ1lCqExnVATtgi7oc',
      authDomain: 'subuswork.firebaseapp.com',
      projectId: 'subuswork',
      storageBucket: 'subuswork.appspot.com'
    }),
    AngularFireStorageModule,
    FrameWorkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
