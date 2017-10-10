import {Component, OnInit} from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import {AuthService} from './auth.service';

import {User} from '../user/user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  sendBtn: any = '获取验证码';
  codeBtnDisabled = true;

  ngOnInit() {
    this.sendBtn = '获取验证码';
    this.codeBtnDisabled = true;
  }

  model = {
    id: null,
    mobile: null,
    code: null,
    addTime: null,
    token: null,
    addressDefault: null,
    regTime: null,
  };

  sendCode(value: string) {
    console.log(value);

    setInterval(() => {
      let time = 60;
      this.sendBtn = time--;
    }, 1000);
  }

  countDown(second: number) {

  }

  checkMobile(value: number) {
    console.log(value)
  }

}
