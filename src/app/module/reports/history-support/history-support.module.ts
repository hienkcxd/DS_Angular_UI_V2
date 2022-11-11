import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportUpdateFormComponent } from './support-update-form/support-update-form.component';
import { SupportCreateFormComponent } from './support-create-form/support-create-form.component';
import { SupportDetailFormComponent } from './support-detail-form/support-detail-form.component';
import { SupportDeleteFormComponent } from './support-delete-form/support-delete-form.component';
import { SupportTableFormComponent } from './support-table-form/support-table-form.component';
import {BrowserModule} from "@angular/platform-browser";
import {DataTablesModule} from "angular-datatables";
import {RouterLinkWithHref} from "@angular/router";



@NgModule({
  declarations: [
    SupportUpdateFormComponent,
    SupportCreateFormComponent,
    SupportDetailFormComponent,
    SupportDeleteFormComponent,
    SupportTableFormComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterLinkWithHref
  ]
})
export class HistorySupportModule { }
