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
      description: "<b>Kurapak App</b> is an App made by Babu Babu Kianggeh.",
      image: "assets/imgs/Logo.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
  ];
  constructor(public navCtrl: NavController) {
  }
  hooomePage(){
    this.navCtrl.push(HomePage);
  }
}