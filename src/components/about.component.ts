import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'about',
  template: require('./about.component.html'),
  styleUrls: [require('./about.component.scss')]
})
export class AboutComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}