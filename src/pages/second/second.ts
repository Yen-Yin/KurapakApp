import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

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

  user = { } as User;

  constructor( private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
    // this.navCtrl.setRoot(SecondPage);
  }

  async Register(user: User){
    this.navCtrl.push(HomePage);
    try { 
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password) 
      console.log(result);
    }
     
     catch (e) {
      console.error(e);
     }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SecondPage');
  // }

}
}

