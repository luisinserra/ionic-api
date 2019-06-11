import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { GeoPageModule } from './geo.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder,NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
/**
 * Generated class for the GeoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geo',
  templateUrl: 'geo.html',
})
export class GeoPage {

  varTela: String;

  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public gg: Geolocation,
    private nativeGeocoder: NativeGeocoder) {

      this.varTela="KKK";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeoPage');
  }
  
  locate(){
    console.log("Pegar coordenadas...");
    console.log(this.gg);
    this.gg.getCurrentPosition()
    // .then((resp) => {
    //   console.log("lat" + resp.coords.latitude + "- long" + resp.coords.longitude)
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
  }

  diga = () => {
    console.log("Dizendo...");
  }

}
