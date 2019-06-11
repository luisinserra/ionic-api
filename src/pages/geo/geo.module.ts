import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeoPage } from './geo';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [
    GeoPage,
    Geolocation,
  ],
  imports: [
    IonicPageModule.forChild(GeoPage),
    Geolocation
  ],
  exports: [
    GeoPage,
    Geolocation
],
  providers: [
    Geolocation
  ]
})
export class GeoPageModule {

  constructor(gp: GeoPage,
    gl: Geolocation) {
      console.log("Pegando localização corrente...");
      gl.getCurrentPosition();
      gp.varTela = "JJJ";
      gp.diga();
  }
}
