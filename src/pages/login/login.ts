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
    tSenha: string;

  constructor(public navCtrl: NavController, alertCtrl : AlertController) {
    this.alertCtrl = alertCtrl;
  }

  handleChange = name => event => {
    let valor=event.target.value;
    console.log("name: "+name+", valor: "+valor);
};

  clicou = () => {
      let msg="Botão pressionado! para "+this.tSenha;
      const alert = this.alertCtrl.create({
        title: 'Vamos nessa!',
        subTitle: msg,
        buttons: ['Tá bom']
      });
      alert.present();
  }

}
