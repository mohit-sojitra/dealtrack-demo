import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragDropModule } from "@angular/cdk/drag-drop";

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { NavigationComponent } from '../../layouts/navigation/navigation.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    PagesComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule.forChild([
      {
        path: '',
        component: PagesComponent,
        children: [
          {
            path: '',
            redirectTo: '/page/dashboard',
            pathMatch: 'full'
            
          },
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'tasks',
            component: TasksComponent,
          },
        ],
      },
    ]),
  ],
})
export class PagesModule {}
