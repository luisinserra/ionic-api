import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getNomes, testeFuncoes, getServico } from '../../funcoes';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  qual: string;
  retorno: object;

  constructor() {
    this.qual = "kkk";
    /*
    getServico('http://clevermidia.com.br/nomes.json').then(function(result){
      console.log("result:");
      console.log(result);
    });
    */
    getNomes();
    
  }

}
