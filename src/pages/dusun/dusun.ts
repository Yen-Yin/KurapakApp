import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DusunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dusun',
  templateUrl: 'dusun.html',
})
export class DusunPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.navCtrl.setRoot(DusunPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DusunPage');
  }

}
