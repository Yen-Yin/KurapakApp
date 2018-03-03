import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { TabPage } from '../pages/tab/tab';
// import { FavPage } from '../pages/fav/fav';
// import { SelectionPage } from '../pages/selection/selection';

import { HomePage } from '../pages/home/home';
import { SlidesPage } from '../pages/slides/slides';

declare var bleep;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = SlidesPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

