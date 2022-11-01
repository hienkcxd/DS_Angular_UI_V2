import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryBroadcastFormComponent } from './history-broadcast-form/history-broadcast-form.component';
import { HistoryBroadcastTableComponent } from './history-broadcast-table/history-broadcast-table.component';
import { HistoryBroadcastMainComponent } from './history-broadcast-main/history-broadcast-main.component';
import {DataTablesModule} from "angular-datatables";



@NgModule({
  declarations: [
    HistoryBroadcastFormComponent,
    HistoryBroadcastTableComponent,
    HistoryBroadcastMainComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
  ]
})
export class HistoryBroadcastModule { }
