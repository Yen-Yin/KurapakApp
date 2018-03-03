import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
@Component({
  templateUrl: 'slides.html'
})
export class SlidesPage {
  slides = [
    {
      title: "Welcome to Kurapak App",
      description: "",
      image: "assets/imgs/Logo.png",
    },
    {
      title: "What is Kurapak App?",
      description: "<b>Kurapak App</b> KurapakApp is a language learning mobile application. It is designed to help people learn seven (7) ethnic Brunei Darussalam which are <b></b>Melayu Brunei, Dusun, Belait, Murut, Bisaya, Tutong and Kedayan.</b>",
      image: "assets/imgs/Logo.png",
    },
  ];
  constructor(public navCtrl: NavController) {
  }
  hooomePage(){
    this.navCtrl.push(HomePage);
  }
}