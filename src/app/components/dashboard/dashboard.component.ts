import { Component, OnInit } from '@angular/core';
import {
  faCheck,
  faExclamationCircle,
  faTasks,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { ClosingSoon } from 'src/app/interfaces/ClosingSoon.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  faUserCircle = faUserCircle;
  faTasks = faTasks;
  faCheck = faCheck;
  faError = faExclamationCircle;
  closingSoonData: ClosingSoon[] = [];
  constructor() {
    this.closingSoonData.push({
      name: 'Smith John',
      address: '123 anywherelane hamilton',
      stackHolder: 2,
      activetask: 12,
      totalTask: 47,
      closingDate: 'June 13,2021',
      termMet: true,
      salePrice: 850499,
      status: 'In-progress',
    });
    this.closingSoonData.push({
      name: 'Hanson, Bob',
      address: '5645 Homewood Road. Toronto',
      stackHolder: 3,
      activetask: 0,
      totalTask: 26,
      closingDate: 'June 13,2021',
      termMet: false,
      salePrice: 850499,
      status: 'Draft',
    });
    this.closingSoonData.push({
      name: 'Black, Eboni',
      address: '215 Smoky Hollow Ave, Mississaunga		',
      stackHolder: 1,
      activetask: 8,
      totalTask: 32,
      closingDate: 'May 2,2021',
      termMet: true,
      salePrice: 850499,
      status: 'In-progress',
    });
    this.closingSoonData.push({
      name: 'Chan, Tobias',
      address: '9080 ROck Maple Drive, London		',
      stackHolder: 2,
      activetask: 0,
      totalTask: 26,
      closingDate: '-',
      termMet: false,
      salePrice: 850499,
      status: 'Draft',
    });
    this.closingSoonData.push({
      name: 'Richardson, Dina',
      address: '857 Pine Street, Toronto',
      stackHolder: 1,
      activetask: 35,
      totalTask: 35,
      closingDate: 'Febuary 7, 2021',
      termMet: true,
      salePrice: 850499,
      status: 'Completed',
    });
  }

  ngOnInit(): void {}

  // utilite function
  counter(i: number): Array<number> {
    return new Array(i);
  }
}
