import {Page} from 'ionic/ionic';
import {TimeLine} from '../../components/timeline/timeline';

@Page({
  templateUrl: 'build/pages/home/home.html',
  directives:[TimeLine]

})
export class HomePage {
  constructor() {

  }
}
