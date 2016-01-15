import {Page} from 'ionic/ionic';
import {DecadeSlide} from './decadeslide/decadeslide';

@Page({
  templateUrl: 'build/pages/home/home.html',
  directives:[DecadeSlide]

})
export class HomePage {
  constructor() {

  }
}
