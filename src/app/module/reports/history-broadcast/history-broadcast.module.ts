import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BroadcastCreateFormComponent } from './broadcast-create-form/broadcast-create-form.component';
import { BroadcastTableFormComponent } from './broadcast-table-form/broadcast-table-form.component';
import {BrowserModule} from "@angular/platform-browser";
import {DataTablesModule} from "angular-datatables";
import {RouterLinkWithHref} from "@angular/router";
import { BroadcastDetailFormComponent } from './broadcast-detail-form/broadcast-detail-form.component';
import { BroadcastUpdateFormComponent } from './broadcast-update-form/broadcast-update-form.component';
import { BroadcastDeleteFormComponent } from './broadcast-delete-form/broadcast-delete-form.component';



@NgModule({
  declarations: [
    BroadcastCreateFormComponent,
    BroadcastTableFormComponent,
    BroadcastDetailFormComponent,
    BroadcastUpdateFormComponent,
    BroadcastDeleteFormComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterLinkWithHref
  ]
})
export class HistoryBroadcastModule { }
