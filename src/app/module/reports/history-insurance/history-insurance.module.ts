import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryInsuranceFormComponent } from './history-insurance-form/history-insurance-form.component';
import { HistoryInsuranceTableComponent } from './history-insurance-table/history-insurance-table.component';
import { HistoryInsuranceMainComponent } from './history-insurance-main/history-insurance-main.component';
import {DataTablesModule} from "angular-datatables";



@NgModule({
  declarations: [
    HistoryInsuranceFormComponent,
    HistoryInsuranceTableComponent,
    HistoryInsuranceMainComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
  ]
})
export class HistoryInsuranceModule { }
