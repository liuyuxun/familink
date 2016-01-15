/**
 * Created by lyx on 2016/1/15.
 */
import {Page} from 'ionic/ionic';

import {Component,ElementRef} from 'angular2/core';
import {TimeLine} from '../../../components/timeline/timeline';

@Component({
    selector: 'decade-slide',
    template: `
    <ion-slides pager autoplay="true">
        <ion-slide>
            <time-line></time-line>
        </ion-slide>

        <ion-slide>
            <time-line></time-line>
        </ion-slide>
    <ion-sildes>
    `,
    directives: [TimeLine]
})
export class DecadeSlide {

}