import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KedayanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kedayan',
  templateUrl: 'kedayan.html',
})
export class KedayanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.navCtrl.setRoot(KedayanPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KedayanPage');
  }

}