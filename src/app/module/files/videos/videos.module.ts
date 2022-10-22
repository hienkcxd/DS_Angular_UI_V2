import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosMainComponent } from './videos-main/videos-main.component';
import { TableComponent } from './table/table.component';
import {DataTablesModule} from "angular-datatables";
import { FormUploadVideoComponent } from './form-upload-video/form-upload-video.component';
import {RouterLinkWithHref} from "@angular/router";



@NgModule({
  declarations: [
    VideosMainComponent,
    TableComponent,
    FormUploadVideoComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
  ]
})
export class VideosModule { }
