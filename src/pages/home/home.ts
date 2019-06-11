import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { analyzeAndValidateNgModules } from '@angular/compiler';

//declare var nomes;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    let nomes: any;
    console.log("aqui: "+nomes);
  }

  motor = () => {
    alert('kkk');
  }

}
