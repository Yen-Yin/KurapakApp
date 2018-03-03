import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MelayuBruneiPage } from '../melayu-brunei/melayu-brunei';
import { TutongPage } from '../tutong/tutong';
import { BelaitPage } from '../belait/belait';
import { DusunPage } from '../dusun/dusun';
import { KedayanPage } from '../kedayan/kedayan';
import { MurutPage } from '../murut/murut';
import { BisayaPage } from '../bisaya/bisaya';
import { AngularFireAuth } from 'angularfire2/auth';
// import { Message } from '@angular/compiler/src/i18n/i18n_ast';
// import { FavPage } from '../fav/fav';

/**
 * Generated class for the SelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html',
})
export class SelectionPage {
  public rootPage: any = SelectionPage;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
    // this.navCtrl.setRoot(SelectionPage);
    
  }

  melayuPage(){
    this.navCtrl.push(MelayuBruneiPage);
  }

  tutongPage(){
    this.navCtrl.push(TutongPage);
  }

  belaitPage(){
    this.navCtrl.push(BelaitPage);
  }

  dusunPage(){
    this.navCtrl.push(DusunPage);
  }

  kedayanPage(){
    this.navCtrl.push(KedayanPage);
  }

  murutPage(){
    this.navCtrl.push(MurutPage);
  }

  bisayaPage(){
    this.navCtrl.push(BisayaPage);
  }
  ionViewWillLoad() {
    // console.log('ionViewDidLoad SelectionPage');
    this.afAuth.authState.subscribe(data => 
      {
        if (data && data.email && data.uid)
        {
          this.toast.create({ message: 'Welcome to Kurapak App!',
    duration: 3000
  }).present(); }
  else{
    this.toast.create({ message: 'Could not find Authentication Details',
    duration: 3000
  }).present();
  }
    });
  }

}
