import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  isHidden() {
    let routeObj = {
      "product": "",
      "cart": "",
      "user": ""
    };
    let pathname = window.location.href.match(".+/(.+?)([\?#;].*)?$")[1];
    return (pathname in routeObj);
  }

  ngOnInit() {
  }
}
