import {Component} from '@angular/core';

import {User} from './user';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent {
  clickMessage = '';
  values = '';

  onClickMe() {
    this.clickMessage = 'You are success';
  };


  onKey(value: string) { // with type info
    this.values += value + ' | ';
  }
}
