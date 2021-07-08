import { Component, OnInit } from '@angular/core';
import { ClosingSoon } from '../../../models/closing-soon.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  dateFormat = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  closingSoonData: ClosingSoon[] = [];
  sortedby = '';
  constructor() {
    this.closingSoonData.push({
      name: 'Smith John',
      address: '123 anywherelane hamilton',
      stackHolder: 2,
      activetask: 12,
      totalTask: 47,
      closingDate: new Date(2020, 7, 30),
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
      closingDate: new Date(2020, 6, 30),
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
      closingDate: new Date(2020, 5, 2),
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
      closingDate: new Date(),
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
      closingDate: new Date(2021, 2, 7),
      termMet: true,
      salePrice: 850499,
      status: 'Completed',
    });
  }

  // sorting event handler
  sortViaDateHandler(): void {
    if (this.sortedby === 'closingDateAsc') {
      this.closingSoonData.sort((a, b) => {
        if (a.closingDate >= b.closingDate) {
          return 1;
        }
        return -1;
      });
      this.sortedby = 'closingDateDesc';
    } else {
      this.closingSoonData.sort((a, b) => {
        if (a.closingDate <= b.closingDate) {
          return 1;
        }
        return -1;
      });
      this.sortedby = 'closingDateAsc';
    }
  }
  sortViaActiveTask(): void {
    if (this.sortedby === 'activeTaskAsc') {
      this.closingSoonData.sort((a, b) => {
        if (a.activetask >= b.activetask) {
          return 1;
        }
        return -1;
      });
      this.sortedby = 'activeTaskDesc';
    } else {
      this.closingSoonData.sort((a, b) => {
        if (a.activetask <= b.activetask) {
          return 1;
        }
        return -1;
      });
      this.sortedby = 'activeTaskAsc';
    }
  }
  sortViaStackHolder(): void {
    if (this.sortedby === 'stackHolderAsc') {
      this.closingSoonData.sort((a, b) => {
        if (a.stackHolder >= b.stackHolder) {
          return 1;
        }
        return -1;
      });
      this.sortedby = 'stackHolderDesc';
    } else {
      this.closingSoonData.sort((a, b) => {
        if (a.stackHolder <= b.stackHolder) {
          return 1;
        }
        return -1;
      });
      this.sortedby = 'stackHolderAsc';
    }
  }

  // utilite function
  counter(i: number): Array<number> {
    return new Array(i);
  }
}
