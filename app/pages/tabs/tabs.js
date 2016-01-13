import {Page} from 'ionic/ionic';
import {HomePage} from '../home/home';
import {TopFamily} from '../topfamily/topfamily';
import {LinkWorld} from '../linkworld/linkworld';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {

    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.homeRoot = HomePage;
    this.topfamilyRoot = TopFamily;
    this.linkworldRoot = LinkWorld;

  }
}
