import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeviceAreaModule} from "./device-area/device-area.module";
import {NotiDailyModule} from "./noti-daily/noti-daily.module";
import {StoreListModule} from "./store-list/store-list.module";
import {UserManagerModule} from "./user-manager/user-manager.module";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DeviceAreaModule,
    NotiDailyModule,
    StoreListModule,
    UserManagerModule,
  ]
})
export class SystemModule { }
