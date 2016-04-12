import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'contact',
  template: require('./contact.component.html'),
  styleUrls: [require('./contact.component.scss')]
})
export class ContactComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}