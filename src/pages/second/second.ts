import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectionPage } from '../selection/selection';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.navCtrl.setRoot(SecondPage);
  }

  nextPage2(){
    this.navCtrl.push(SelectionPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
