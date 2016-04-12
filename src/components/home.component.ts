import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  styleUrls: [require('./home.component.scss')]
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}