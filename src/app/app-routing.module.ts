import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeMainComponent} from "./module/home/home-main/home-main.component";
import {ProfileMainComponent} from "./module/profile/profile-main/profile-main.component";
import {UserManagerModule} from "./module/system/user-manager/user-manager.module";
import {StoreListModule} from "./module/system/store-list/store-list.module";
import {UserManagerMainComponent} from "./module/system/user-manager/user-manager-main/user-manager-main.component";
import {StoreMainComponent} from "./module/system/store-list/store-main/store-main.component";
import {DeviceMainComponent} from "./module/system/device-area/device-main/device-main.component";
import {NotiMainComponent} from "./module/system/noti-daily/noti-main/noti-main.component";
import {GroupDeviceMainComponent} from "./module/devices/group-device/group-device-main/group-device-main.component";
import {
  GroupDeviceCreateComponent
} from "./module/devices/group-device/group-device-create/group-device-create.component";
import {
  GroupDeviceDetailComponent
} from "./module/devices/group-device/group-device-detail/group-device-detail.component";
import {
  GroupDeviceUpdateComponent
} from "./module/devices/group-device/group-device-update/group-device-update.component";
import {
  GroupDeviceDeleteComponent
} from "./module/devices/group-device/group-device-delete/group-device-delete.component";
import {StatusMainComponent} from "./module/devices/status/status-main/status-main.component";
import {StatusDetailComponent} from "./module/devices/status/status-detail/status-detail.component";
import {StatusDeleteComponent} from "./module/devices/status/status-delete/status-delete.component";
import {StatusUpdateComponent} from "./module/devices/status/status-update/status-update.component";
import {
  ContentSelectorMainComponent
} from "./module/devices/content-selector/content-selector-main/content-selector-main.component";
import {
  ContentSelectorCreateComponent
} from "./module/devices/content-selector/content-selector-create/content-selector-create.component";
import {
  OperatorHistoryMainComponent
} from "./module/devices/operator-history/operator-history-main/operator-history-main.component";
import {
  OperatorHistoryTableComponent
} from "./module/devices/operator-history/operator-history-table/operator-history-table.component";
import {
  OperatorHistoryDetailComponent
} from "./module/devices/operator-history/operator-history-detail/operator-history-detail.component";

const routes: Routes = [
  {path: "devices", children:[
      {path: "", redirectTo: "group-device", pathMatch: "full"},
      {path: "group-device", children:[
          {path:"", component:GroupDeviceMainComponent},
          {path: "create-device", component: GroupDeviceCreateComponent},
          {path: "detail-device", component: GroupDeviceDetailComponent},
          {path: "update-device", component: GroupDeviceUpdateComponent},
          {path: "delete-device", component: GroupDeviceDeleteComponent},
        ]},
      {path: "status", children:[
          {path:"", component:StatusMainComponent},
          {path: "status-detail", component: StatusDetailComponent},
          {path: "status-update", component: StatusUpdateComponent},
          {path: "status-delete", component: StatusDeleteComponent},
        ]},
      {path: "content-selector", children:[
          {path:"", component:ContentSelectorMainComponent},
          {path: "create-content-selector", component: ContentSelectorCreateComponent},
        ]},
      {path: "operator-history", children:[
          {path:"", component:OperatorHistoryMainComponent},
          {path: "operator-history-detail", component: OperatorHistoryDetailComponent},
        ]}
    ]},
  // {path:"", component: LoginComponent},
  // {path:"404", component: Errors404Component},
  // {path:"500", component: Errors500Component},
  {path:"home", component: HomeMainComponent},
  {path:"user-detail", component: ProfileMainComponent},
  {path: "manage-user", component:UserManagerMainComponent},
  {path: "store-list", component:StoreMainComponent},
  {path: "area-device", component:DeviceMainComponent},
  {path: "noti-daily", component:NotiMainComponent},
  {path: "group-device", component:GroupDeviceMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
