import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { NavigationComponent } from '../../layouts/navigation/navigation.component';
import { HeaderComponent } from '../../layouts/header/header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
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
export class HomeModule {}
