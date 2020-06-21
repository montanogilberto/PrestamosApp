import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule} from 'angularfire2';
import { environment} from '../environments/environment';
import { AngularFirestoreModule} from 'angularfire2/firestore';
//import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from "@angular/fire/storage";
import { ChatComponent } from "./components/chat/chat.component";

@NgModule({
  declarations: [AppComponent, ChatComponent],
  entryComponents: [ChatComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    //AngularFireAuth,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
