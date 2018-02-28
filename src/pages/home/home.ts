import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { SelectionPage } from '../selection/selection';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    // this.navCtrl.setRoot(HomePage);
  }
  nextPage(){
    this.navCtrl.push(SecondPage);
  }
  nextPage1(){
    this.navCtrl.push(SelectionPage);
  }
}