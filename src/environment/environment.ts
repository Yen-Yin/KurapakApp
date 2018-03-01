import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnvironmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-environment',
  templateUrl: 'environment.html',
})
export class EnvironmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnvironmentPage');
  }

}
<<<<<<< HEAD
export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyBOisQL1HLRPjpTlmaxuOKochgiomPP5gI",
      authDomain: "kurapakapp-b7a45.firebaseapp.com",
      databaseURL: "https://kurapakapp-b7a45.firebaseio.com",
      projectId: "kurapakapp-b7a45",
      storageBucket: "kurapakapp-b7a45.appspot.com",
      messagingSenderId: "693670527705"
  }
    };
=======
>>>>>>> 4dd03c6a9e8fe94b15e557d9a37f4e8350694fce
