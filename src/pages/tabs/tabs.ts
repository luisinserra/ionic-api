import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ApiPage } from '../api/api';
import { LoginPage } from '../login/login';
import { DevelopersPage } from '../developers/developers.page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ApiPage;
  tab5Root = LoginPage;
  tab6Root = DevelopersPage;

  constructor() {

  }
}
