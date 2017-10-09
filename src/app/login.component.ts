import {Component} from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import {AuthService} from './auth.service';

// import {User} from './user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  clickMessage = '';
  values = '';

  constructor(public authService,
              public router: Router) {

  }
  //
  // onClickMe() {
  //   this.clickMessage = 'You are success';
  // };
  //
  //
  // onKey(value: string) { // with type info
  //   this.values += value + ' | ';
  // }
}
