import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../models';

import { CITIES } from './login.constant';

@Component({
  selector: 'mlkms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any;
  submitted = false;
  cities = CITIES;
  @Output() loginHandler = new EventEmitter();

  constructor() {
    this.model = new User(1, '', '', '');
  }

  ngOnInit() {
  }

  onLogin() {
    this.submitted = true;
    this.loginHandler.emit(this.model);
  }

}
