import { Component, OnInit } from '@angular/core';
import {
  faBell,
  faCog,
  faHandshakeAltSlash,
  faHome,
  faTasks,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  faBell = faBell;
  faHome = faHome;
  faHandshakeAltSlash = faHandshakeAltSlash;
  faTasks = faTasks;
  faCog = faCog;
  isNavBarOpen = false;
  constructor() {}

  ngOnInit(): void {}

  toggleNavBar() {
    this.isNavBarOpen = !this.isNavBarOpen;
  }
}
