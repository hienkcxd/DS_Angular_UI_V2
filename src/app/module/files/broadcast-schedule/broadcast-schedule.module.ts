import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BroadcastScheduleFormComponent } from './broadcast-schedule-form/broadcast-schedule-form.component';
import { BroadcastScheduleTableComponent } from './broadcast-schedule-table/broadcast-schedule-table.component';
import { BroadcastScheduleMainComponent } from './broadcast-schedule-main/broadcast-schedule-main.component';
import {DataTablesModule} from "angular-datatables";



@NgModule({
  declarations: [
    BroadcastScheduleFormComponent,
    BroadcastScheduleTableComponent,
    BroadcastScheduleMainComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
  ]
})
export class BroadcastScheduleModule { }
