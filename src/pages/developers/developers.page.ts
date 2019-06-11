import { DatabaseService, Dev } from './../services/database.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
 
@Component({
  templateUrl: './developers.page.html',
  providers: [DatabaseService]
})
export class DevelopersPage implements OnInit {
 
  developers: Dev[] = [];
  products: Observable<any[]>;
  developer = {};
  product = {};
  selectedView = 'devs';
 
  constructor(private db: DatabaseService) { }

  ngOnInit() {

  }
 
  addDeveloper() {
  }
 
  addProduct() {
  }
 
}