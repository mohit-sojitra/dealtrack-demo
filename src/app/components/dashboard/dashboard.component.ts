import { Component, OnInit } from '@angular/core';
import { faCheck, faExclamationCircle, faTasks, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  faUserCircle = faUserCircle;
  faTasks = faTasks;
  faCheck = faCheck;
  faError = faExclamationCircle
  constructor() {}

  ngOnInit(): void {}
}
