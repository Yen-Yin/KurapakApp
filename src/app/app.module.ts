import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SecondPage } from '../pages/second/second';
import { SelectionPage } from '../pages/selection/selection';
import { MelayuBruneiPage } from '../pages/melayu-brunei/melayu-brunei';
import { TutongPage } from '../pages/tutong/tutong';
import { BelaitPage } from '../pages/belait/belait';
import { DusunPage } from '../pages/dusun/dusun';
import { KedayanPage } from '../pages/kedayan/kedayan';
import { MurutPage } from '../pages/murut/murut';
import { BisayaPage } from '../pages/bisaya/bisaya';
// import { FavPage } from '../pages/fav/fav';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SecondPage,
    SelectionPage,
    MelayuBruneiPage,
    TutongPage,
    BelaitPage,
    DusunPage,
    KedayanPage,
    MurutPage,
    BisayaPage
    // FavPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecondPage,
    SelectionPage,
    MelayuBruneiPage,
    TutongPage,
    BelaitPage,
    DusunPage,
    KedayanPage,
    MurutPage,
    BisayaPage
    // FavPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
