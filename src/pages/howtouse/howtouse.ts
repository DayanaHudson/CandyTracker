import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-howtouse',
  templateUrl: 'howtouse.html'
})
export class HowToUsePage {

  constructor(public navCtrl: NavController) {
    console.log("reached how to use page constructor");
  }

}
