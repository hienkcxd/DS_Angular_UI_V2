import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './module/layout/header/header.component';
import { FooterComponent } from './module/layout/footer/footer.component';
import { AdminSidebarComponent } from './module/layout/admin-sidebar/admin-sidebar.component';
import { UserSidebarComponent } from './module/layout/user-sidebar/user-sidebar.component';
import {DataTablesModule} from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminSidebarComponent,
    UserSidebarComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
