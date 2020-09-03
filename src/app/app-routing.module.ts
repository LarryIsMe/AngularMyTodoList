import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { AgGridTableComponent } from './ag-grid-table/ag-grid-table.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'todo-list',
        component: TodoListComponent
      },
      {
        path: 'guest-book',
        component: GuestBookComponent
      },
      {
        path: 'ag-grid-table',
        component: AgGridTableComponent
      },

      {
        path: 'feature',
        loadChildren: './feature/feature.module#FeatureModule'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
