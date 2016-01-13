import {Component} from 'angular2/core';
@Component({
  selector: 'time-line',
  template: `
  <div class="timeline_container">
    <div class="timeline">
        <div *ngFor="#decade of decades">
        <h2>{{decade.name}}</h2>
        <ul>
            <li *ngFor="#p of decade.peoples">
                <h3>{{p.name}}</h3>
                <p>{{p.desc}}</p>
                <time>{{p.birth}}</time>
            </li>
        </ul>

    </div>
  </div>`
})
export class TimeLine {
    decades = [
        {
        name:'第一代',
        peoples:[
                {name:'lyx',desc:'dddd',birth:'1985'},
                {name:'lyx',desc:'dddd',birth:'1985'},
                {name:'lyx',desc:'dddd',birth:'1985'},
                {name:'lyx',desc:'dddd',birth:'1985'}
                ]
        },        {
        name:'第一代',
        peoples:[
                {name:'lyx',desc:'dddd',birth:'1985'},
                {name:'lyx',desc:'dddd',birth:'1985'},
                {name:'lyx',desc:'dddd',birth:'1985'},
                {name:'lyx',desc:'dddd',birth:'1985'}
                ]
        },        {
        name:'第一代',
        peoples:[
                {name:'lyx',desc:'dddd',birth:'1985'},
                {name:'lyx',desc:'dddd',birth:'1985'},
                {name:'lyx',desc:'dddd',birth:'1985'},
                {name:'lyx',desc:'dddd',birth:'1985'}
                ]
        }];
}