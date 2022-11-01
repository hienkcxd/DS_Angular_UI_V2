import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorySupportFormComponent } from './history-support-form/history-support-form.component';
import { HistorySupportTableComponent } from './history-support-table/history-support-table.component';
import { HistorySupportMainComponent } from './history-support-main/history-support-main.component';
import {DataTablesModule} from "angular-datatables";



@NgModule({
  declarations: [
    HistorySupportFormComponent,
    HistorySupportTableComponent,
    HistorySupportMainComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
  ]
})
export class HistorySupportModule { }
