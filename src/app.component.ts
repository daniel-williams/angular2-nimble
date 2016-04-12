import {Component, OnInit, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './components';
import {AboutComponent} from './components';
import {ContactComponent} from './components';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/about', name: 'About', component: AboutComponent},
  {path: '/contact', name: 'Contact', component: ContactComponent},
  {path: '/**', redirectTo: ['Home']},
])
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}