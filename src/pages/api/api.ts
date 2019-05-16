import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-api',
  templateUrl: 'api.html'
})
export class ApiPage {

  private nomes='';
  private alertCtrl;

  constructor(public navCtrl: NavController, public http: HttpClient, alertCtrl : AlertController) {
    this.alertCtrl = alertCtrl;
    console.log("No construtor");
    this.http.get("http://clevermidia.com.br/nomes.json").subscribe(data => {
      this.nomes = data.nomes;
      //console.log=(data);
    });
  }

  itemSelected = (pessoa) => {
    const alert = this.alertCtrl.create({
      title: 'Eis uma pessoa!',
      subTitle: 'Você clicou na pessoa '+pessoa.nome+'!',
      buttons: ['OK']
    });
    alert.present();
  }

}
