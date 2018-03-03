import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { SelectionPage } from '../selection/selection';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController) {
    // this.navCtrl.setRoot(HomePage);
  }
  async Login(user: User){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      if(result){
        this.navCtrl.setRoot(SelectionPage);
      }
      // this.navCtrl.push(SelectionPage);
      // console.log(result);
    }
    catch(e) {
      console.error(e);
    }
  
  // Register(){
  //   this.navCtrl.push(SecondPage);
  // }
}
Register(){
  this.navCtrl.push(SecondPage);
}
}