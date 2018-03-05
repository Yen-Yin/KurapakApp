import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the TutongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var bleep;
@IonicPage()
@Component({
  selector: 'page-tutong',
  templateUrl: 'tutong.html',
})
export class TutongPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    // this.navCtrl.setRoot(TutongPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutongPage');
  }
  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Set as Favourite',
      message: 'This Word will display at Favourite Page as you Favourite word, Are You Sure ',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }
}




