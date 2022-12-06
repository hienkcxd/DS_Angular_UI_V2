import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeMainComponent} from "./module/home/home-main/home-main.component";
import {ProfileMainComponent} from "./module/profile/profile-main/profile-main.component";
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
  OperatorHistoryDetailComponent
} from "./module/devices/operator-history/operator-history-detail/operator-history-detail.component";
import {
  ContentSelectorDeleteComponent
} from "./module/devices/content-selector/content-selector-delete/content-selector-delete.component";
import {
  ContentSelectorDetailComponent
} from "./module/devices/content-selector/content-selector-detail/content-selector-detail.component";
import {
  ContentSelectorUpdateComponent
} from "./module/devices/content-selector/content-selector-update/content-selector-update.component";
import {
  OperatorHistoryDeleteComponent
} from "./module/devices/operator-history/operator-history-delete/operator-history-delete.component";
import {
  OperatorHistoryUpdateComponent
} from "./module/devices/operator-history/operator-history-update/operator-history-update.component";
import {UserCreateFormComponent} from "./module/system/user-manager/user-create-form/user-create-form.component";
import {UserDetailFormComponent} from "./module/system/user-manager/user-detail-form/user-detail-form.component";
import {UserEditFormComponent} from "./module/system/user-manager/user-edit-form/user-edit-form.component";
import {UserDeleteFormComponent} from "./module/system/user-manager/user-delete-form/user-delete-form.component";
import {StoreListCreateComponent} from "./module/system/store-list/store-list-create/store-list-create.component";
import {StoreListDetailComponent} from "./module/system/store-list/store-list-detail/store-list-detail.component";
import {StoreListEditComponent} from "./module/system/store-list/store-list-edit/store-list-edit.component";
import {StoreListDeleteComponent} from "./module/system/store-list/store-list-delete/store-list-delete.component";
import {NotiCreateFormComponent} from "./module/system/noti-daily/noti-create-form/noti-create-form.component";
import {NotiDetailFormComponent} from "./module/system/noti-daily/noti-detail-form/noti-detail-form.component";
import {NotiEditFormComponent} from "./module/system/noti-daily/noti-edit-form/noti-edit-form.component";
import {NotiDeleteFormComponent} from "./module/system/noti-daily/noti-delete-form/noti-delete-form.component";
import {DeviceCreateFormComponent} from "./module/system/device-area/device-create-form/device-create-form.component";
import {DeviceDetailFormComponent} from "./module/system/device-area/device-detail-form/device-detail-form.component";
import {DeviceEditFormComponent} from "./module/system/device-area/device-edit-form/device-edit-form.component";
import {DeviceDeleteFormComponent} from "./module/system/device-area/device-delete-form/device-delete-form.component";
import {
  BroadcastTableFormComponent
} from "./module/reports/history-broadcast/broadcast-table-form/broadcast-table-form.component";
import {
  BroadcastCreateFormComponent
} from "./module/reports/history-broadcast/broadcast-create-form/broadcast-create-form.component";
import {
  BroadcastDetailFormComponent
} from "./module/reports/history-broadcast/broadcast-detail-form/broadcast-detail-form.component";
import {
  BroadcastUpdateFormComponent
} from "./module/reports/history-broadcast/broadcast-update-form/broadcast-update-form.component";
import {
  BroadcastDeleteFormComponent
} from "./module/reports/history-broadcast/broadcast-delete-form/broadcast-delete-form.component";
import {
  InsuranceTableFormComponent
} from "./module/reports/history-insurance/insurance-table-form/insurance-table-form.component";
import {
  InsuranceCreateFormComponent
} from "./module/reports/history-insurance/insurance-create-form/insurance-create-form.component";
import {
  InsuranceDetailFormComponent
} from "./module/reports/history-insurance/insurance-detail-form/insurance-detail-form.component";
import {
  InsuranceUpdateFormComponent
} from "./module/reports/history-insurance/insurance-update-form/insurance-update-form.component";
import {
  InsuranceDeleteFormComponent
} from "./module/reports/history-insurance/insurance-delete-form/insurance-delete-form.component";
import {
  SupportTableFormComponent
} from "./module/reports/history-support/support-table-form/support-table-form.component";
import {
  SupportCreateFormComponent
} from "./module/reports/history-support/support-create-form/support-create-form.component";
import {
  SupportDetailFormComponent
} from "./module/reports/history-support/support-detail-form/support-detail-form.component";
import {
  SupportUpdateFormComponent
} from "./module/reports/history-support/support-update-form/support-update-form.component";
import {
  SupportDeleteFormComponent
} from "./module/reports/history-support/support-delete-form/support-delete-form.component";
import {
  ScheduleUpdateFormComponent
} from "./module/files/broadcast-schedule/schedule-update-form/schedule-update-form.component";
import {
  ScheduleDetailFormComponent
} from "./module/files/broadcast-schedule/schedule-detail-form/schedule-detail-form.component";
import {
  ScheduleDeleteFormComponent
} from "./module/files/broadcast-schedule/schedule-delete-form/schedule-delete-form.component";
import {
  ScheduleCreateFormComponent
} from "./module/files/broadcast-schedule/schedule-create-form/schedule-create-form.component";
import {
  ScheduleTableFormComponent
} from "./module/files/broadcast-schedule/schedule-table-form/schedule-table-form.component";
import {PlaylistTableFormComponent} from "./module/files/play-list/playlist-table-form/playlist-table-form.component";
import {
  PlaylistCreateFormComponent
} from "./module/files/play-list/playlist-create-form/playlist-create-form.component";
import {
  PlaylistDetailFormComponent
} from "./module/files/play-list/playlist-detail-form/playlist-detail-form.component";
import {
  PlaylistUpdateFormComponent
} from "./module/files/play-list/playlist-update-form/playlist-update-form.component";
import {
  PlaylistDeleteFormComponent
} from "./module/files/play-list/playlist-delete-form/playlist-delete-form.component";
import {VideosTableFormComponent} from "./module/files/videos/videos-table-form/videos-table-form.component";
import {VideosCreateFormComponent} from "./module/files/videos/videos-create-form/videos-create-form.component";
import {VideosDetailFormComponent} from "./module/files/videos/videos-detail-form/videos-detail-form.component";
import {VideosUpdateFormComponent} from "./module/files/videos/videos-update-form/videos-update-form.component";
import {VideosDeleteFormComponent} from "./module/files/videos/videos-delete-form/videos-delete-form.component";
import {LoginComponent} from "./module/login/login/login.component";
import {AuthGuard} from "./services/auth.guard";
import {AppComponent} from "./app.component";
import * as path from "path";
import {LayoutMainComponent} from "./layout-main/layout-main.component";
import {Error404Component} from "./module/error/error404/error404.component";
import {Error500Component} from "./module/error/error500/error500.component";


const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"404", component: Error404Component},
  {path:"500", component: Error500Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
