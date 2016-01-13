import {Page} from 'ionic/ionic';
import {HomePage} from '../home/home';
import {DefaultPage} from '../default/default';
import {StaticPage} from '../statics/statics';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {

    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.homeRoot = HomePage;
    this.defaultRoot = DefaultPage;
    this.staticRoot = StaticPage;

  }
}
