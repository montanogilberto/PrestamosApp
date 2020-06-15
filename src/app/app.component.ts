import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  private user: firebase.User;
  userEmail: string;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/folder/inicio',
      icon: 'home'
    },
    {
      title: 'Clientes',
      url: '/clientes',
      icon: 'people'
    },
    {
      title: 'Cerrar Sesion',
      url: '/login',
      icon: 'log-out'
    }
  ];

  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public angularFireAuth: AngularFireAuth
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    this.angularFireAuth.authState.subscribe(user => {
      this.user = user;
      this.userEmail = user.email;
      console.log('user',this.userEmail);
    });
  }
}
