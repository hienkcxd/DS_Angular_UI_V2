import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPlayListComponent } from './main-play-list/main-play-list.component';

import { FormPlayListComponent } from './form-play-list/form-play-list.component';
import {DataTablesModule} from "angular-datatables";
import { TablePlayListComponent } from './table-play-list/table-play-list.component';



@NgModule({
  declarations: [
    MainPlayListComponent,

    FormPlayListComponent,
      TablePlayListComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
  ]
})
export class PlayListModule { }
