import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the KedayanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.AlertController
 */

@IonicPage()
@Component({
  selector: 'page-kedayan',
  templateUrl: 'kedayan.html',
})
export class KedayanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    // this.navCtrl.setRoot(TutongPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KedayanPage');
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

