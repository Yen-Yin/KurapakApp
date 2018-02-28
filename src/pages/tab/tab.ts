import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { SelectionPage } from '../selection/selection';
import { FavPage } from '../fav/fav';
import { HomePage } from '../home/home';

/**
 * Generated class for the TabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  tab1Root: any = SelectionPage;
  tab2Root: any = FavPage;
  tab3Root: any = HomePage;


  constructor(public navCtrl: NavController) {}

}
