import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

import {slideInDownAnimation} from '../common/animations';

@Component({
  selector: 'pop-up',
  templateUrl: './set-parameter.component.html',
  styleUrls: ['./set-parameter.component.scss'],
  animations: [slideInDownAnimation]
})

export class SetParameterComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  @Output() onHidden = new EventEmitter<boolean>();

  close(close: boolean) {
    this.onHidden.emit(close);
  }

}
