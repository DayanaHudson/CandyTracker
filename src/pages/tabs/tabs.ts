import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { HowToUsePage } from '../howtouse/howtouse';
import { AboutPage } from '../about/about';
import { FriendsPage } from '../friends/friends';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = FriendsPage;
  tab3Root: any = HowToUsePage;
  tab4Root: any = AboutPage;

  constructor() {
    console.log("reached tab creation");
  }
}
