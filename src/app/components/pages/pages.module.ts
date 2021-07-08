import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PagesComponent,
        children: [
          {
            path: '',
            component: DashboardComponent,
          },
        ],
      },
    ]),
  ],
})
export class PagesModule {}
