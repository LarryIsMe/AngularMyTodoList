import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

// Module
import { FeatureModule } from './feature/feature.module';

import { TodoListModule} from './todo-list/todo-list.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component'
import { FormsModule } from '@angular/forms';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { AgGridTableComponent } from './ag-grid-table/ag-grid-table.component';

import { MDCDialog } from '@material/dialog';
import { DetailComponent } from './home/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    GuestBookComponent,
    AgGridTableComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
