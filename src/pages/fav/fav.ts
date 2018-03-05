import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html',
})
export class FavPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.navCtrl.setRoot(FavPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavPage');
  }
  templateURL: 'fav.html'

}
export class BasicPage{ }
