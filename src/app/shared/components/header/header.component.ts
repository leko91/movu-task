import { Component, OnInit, Input } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  navigationOpened = false;
  title = 'The Book Repository';

  constructor() {
  }

  ngOnInit() {
  }

  toggleNavigation() {
    this.navigationOpened = !this.navigationOpened;
  }
}
