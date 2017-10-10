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
  message: string;

  constructor(public authService: AuthService,
              public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = '登录中...'
  }

  ngOnInit() {
    // let token = localStorage.getItem('token');

    this.sendBtn = '获取验证码';
    this.codeBtnDisabled = true;
  }

  model = {
    mobile: null,
    code: null,
    addTime: null,
    regTime: null,
  };

  mobileSubmit(mobile: any) {
    console.log(mobile);
  }

  loginSubmit(mobile: any, code: any) {
    this.setMessage();

    this.authService.isLoggedIn = true;
    if (this.authService.isLoggedIn) {
      console.log(this.authService)
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/user';

      let navigationExtras: NavigationExtras = {
        queryParamsHandling: 'preserve',
        preserveFragment: true
      };

      this.router.navigate([redirect], navigationExtras);
    }
    //传回 后台新建或更新 再传回token
  }

}
