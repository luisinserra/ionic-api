import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    private alertCtrl;
    public login: string = 'aa';

  constructor(public navCtrl: NavController, alertCtrl : AlertController) {
    this.alertCtrl = alertCtrl;
  }

  clicou = () => {
      let msg="Botão pressionado! para "+this.login;
      const alert = this.alertCtrl.create({
        title: 'Vamos nessa!',
        subTitle: msg,
        buttons: ['Tá bom']
      });
      alert.present();
  }

}
