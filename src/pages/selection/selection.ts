import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MelayuBruneiPage } from '../melayu-brunei/melayu-brunei';
import { TutongPage } from '../tutong/tutong';
import { BelaitPage } from '../belait/belait';
import { DusunPage } from '../dusun/dusun';
import { KedayanPage } from '../kedayan/kedayan';
import { MurutPage } from '../murut/murut';
import { BisayaPage } from '../bisaya/bisaya';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectionPage');
  }

}
