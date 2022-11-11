import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceDeleteFormComponent } from './insurance-delete-form/insurance-delete-form.component';
import { InsuranceCreateFormComponent } from './insurance-create-form/insurance-create-form.component';
import { InsuranceDetailFormComponent } from './insurance-detail-form/insurance-detail-form.component';
import { InsuranceUpdateFormComponent } from './insurance-update-form/insurance-update-form.component';
import { InsuranceTableFormComponent } from './insurance-table-form/insurance-table-form.component';
import {BrowserModule} from "@angular/platform-browser";
import {DataTablesModule} from "angular-datatables";
import {RouterLinkWithHref} from "@angular/router";



@NgModule({
  declarations: [
    InsuranceDeleteFormComponent,
    InsuranceCreateFormComponent,
    InsuranceDetailFormComponent,
    InsuranceUpdateFormComponent,
    InsuranceTableFormComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterLinkWithHref
  ]
})
export class HistoryInsuranceModule { }
