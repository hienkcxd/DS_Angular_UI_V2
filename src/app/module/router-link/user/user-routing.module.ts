import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutMainComponent} from "../../../layout-main/layout-main.component";
import {GroupDeviceMainComponent} from "../../devices/group-device/group-device-main/group-device-main.component";
import {GroupDeviceCreateComponent} from "../../devices/group-device/group-device-create/group-device-create.component";
import {GroupDeviceDetailComponent} from "../../devices/group-device/group-device-detail/group-device-detail.component";
import {GroupDeviceUpdateComponent} from "../../devices/group-device/group-device-update/group-device-update.component";
import {GroupDeviceDeleteComponent} from "../../devices/group-device/group-device-delete/group-device-delete.component";
import {StatusMainComponent} from "../../devices/status/status-main/status-main.component";
import {StatusDetailComponent} from "../../devices/status/status-detail/status-detail.component";
import {StatusUpdateComponent} from "../../devices/status/status-update/status-update.component";
import {StatusDeleteComponent} from "../../devices/status/status-delete/status-delete.component";
import {
  ContentSelectorMainComponent
} from "../../devices/content-selector/content-selector-main/content-selector-main.component";
import {
  ContentSelectorCreateComponent
} from "../../devices/content-selector/content-selector-create/content-selector-create.component";
import {
  ContentSelectorDeleteComponent
} from "../../devices/content-selector/content-selector-delete/content-selector-delete.component";
import {
  ContentSelectorDetailComponent
} from "../../devices/content-selector/content-selector-detail/content-selector-detail.component";
import {
  ContentSelectorUpdateComponent
} from "../../devices/content-selector/content-selector-update/content-selector-update.component";
import {
  OperatorHistoryMainComponent
} from "../../devices/operator-history/operator-history-main/operator-history-main.component";
import {
  OperatorHistoryDetailComponent
} from "../../devices/operator-history/operator-history-detail/operator-history-detail.component";
import {
  OperatorHistoryDeleteComponent
} from "../../devices/operator-history/operator-history-delete/operator-history-delete.component";
import {
  OperatorHistoryUpdateComponent
} from "../../devices/operator-history/operator-history-update/operator-history-update.component";
import {UserManagerMainComponent} from "../../system/user-manager/user-manager-main/user-manager-main.component";
import {UserCreateFormComponent} from "../../system/user-manager/user-create-form/user-create-form.component";
import {UserDetailFormComponent} from "../../system/user-manager/user-detail-form/user-detail-form.component";
import {UserEditFormComponent} from "../../system/user-manager/user-edit-form/user-edit-form.component";
import {UserDeleteFormComponent} from "../../system/user-manager/user-delete-form/user-delete-form.component";
import {StoreMainComponent} from "../../system/store-list/store-main/store-main.component";
import {StoreListCreateComponent} from "../../system/store-list/store-list-create/store-list-create.component";
import {StoreListDetailComponent} from "../../system/store-list/store-list-detail/store-list-detail.component";
import {StoreListEditComponent} from "../../system/store-list/store-list-edit/store-list-edit.component";
import {StoreListDeleteComponent} from "../../system/store-list/store-list-delete/store-list-delete.component";
import {NotiMainComponent} from "../../system/noti-daily/noti-main/noti-main.component";
import {NotiCreateFormComponent} from "../../system/noti-daily/noti-create-form/noti-create-form.component";
import {NotiDetailFormComponent} from "../../system/noti-daily/noti-detail-form/noti-detail-form.component";
import {NotiEditFormComponent} from "../../system/noti-daily/noti-edit-form/noti-edit-form.component";
import {NotiDeleteFormComponent} from "../../system/noti-daily/noti-delete-form/noti-delete-form.component";
import {DeviceMainComponent} from "../../system/device-area/device-main/device-main.component";
import {DeviceCreateFormComponent} from "../../system/device-area/device-create-form/device-create-form.component";
import {DeviceDetailFormComponent} from "../../system/device-area/device-detail-form/device-detail-form.component";
import {DeviceEditFormComponent} from "../../system/device-area/device-edit-form/device-edit-form.component";
import {DeviceDeleteFormComponent} from "../../system/device-area/device-delete-form/device-delete-form.component";
import {
  ScheduleTableFormComponent
} from "../../files/broadcast-schedule/schedule-table-form/schedule-table-form.component";
import {
  ScheduleCreateFormComponent
} from "../../files/broadcast-schedule/schedule-create-form/schedule-create-form.component";
import {
  ScheduleDetailFormComponent
} from "../../files/broadcast-schedule/schedule-detail-form/schedule-detail-form.component";
import {
  ScheduleUpdateFormComponent
} from "../../files/broadcast-schedule/schedule-update-form/schedule-update-form.component";
import {
  ScheduleDeleteFormComponent
} from "../../files/broadcast-schedule/schedule-delete-form/schedule-delete-form.component";
import {PlaylistTableFormComponent} from "../../files/play-list/playlist-table-form/playlist-table-form.component";
import {PlaylistCreateFormComponent} from "../../files/play-list/playlist-create-form/playlist-create-form.component";
import {PlaylistDetailFormComponent} from "../../files/play-list/playlist-detail-form/playlist-detail-form.component";
import {PlaylistUpdateFormComponent} from "../../files/play-list/playlist-update-form/playlist-update-form.component";
import {PlaylistDeleteFormComponent} from "../../files/play-list/playlist-delete-form/playlist-delete-form.component";
import {VideosTableFormComponent} from "../../files/videos/videos-table-form/videos-table-form.component";
import {VideosCreateFormComponent} from "../../files/videos/videos-create-form/videos-create-form.component";
import {VideosDetailFormComponent} from "../../files/videos/videos-detail-form/videos-detail-form.component";
import {VideosUpdateFormComponent} from "../../files/videos/videos-update-form/videos-update-form.component";
import {VideosDeleteFormComponent} from "../../files/videos/videos-delete-form/videos-delete-form.component";
import {
  BroadcastTableFormComponent
} from "../../reports/history-broadcast/broadcast-table-form/broadcast-table-form.component";
import {
  BroadcastCreateFormComponent
} from "../../reports/history-broadcast/broadcast-create-form/broadcast-create-form.component";
import {
  BroadcastDetailFormComponent
} from "../../reports/history-broadcast/broadcast-detail-form/broadcast-detail-form.component";
import {
  BroadcastUpdateFormComponent
} from "../../reports/history-broadcast/broadcast-update-form/broadcast-update-form.component";
import {
  BroadcastDeleteFormComponent
} from "../../reports/history-broadcast/broadcast-delete-form/broadcast-delete-form.component";
import {
  InsuranceTableFormComponent
} from "../../reports/history-insurance/insurance-table-form/insurance-table-form.component";
import {
  InsuranceCreateFormComponent
} from "../../reports/history-insurance/insurance-create-form/insurance-create-form.component";
import {
  InsuranceDetailFormComponent
} from "../../reports/history-insurance/insurance-detail-form/insurance-detail-form.component";
import {
  InsuranceUpdateFormComponent
} from "../../reports/history-insurance/insurance-update-form/insurance-update-form.component";
import {
  InsuranceDeleteFormComponent
} from "../../reports/history-insurance/insurance-delete-form/insurance-delete-form.component";
import {SupportTableFormComponent} from "../../reports/history-support/support-table-form/support-table-form.component";
import {
  SupportCreateFormComponent
} from "../../reports/history-support/support-create-form/support-create-form.component";
import {
  SupportDetailFormComponent
} from "../../reports/history-support/support-detail-form/support-detail-form.component";
import {
  SupportUpdateFormComponent
} from "../../reports/history-support/support-update-form/support-update-form.component";
import {
  SupportDeleteFormComponent
} from "../../reports/history-support/support-delete-form/support-delete-form.component";
import {HomeMainComponent} from "../../home/home-main/home-main.component";
import {UserLayoutComponent} from "../../../layout-main/user-layout/user-layout.component";

const routes: Routes = [
  {path:"user", component: UserLayoutComponent, children:[
      //-------------------Device--------------------------------//
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
              {path: "delete-content-selector", component: ContentSelectorDeleteComponent},
              {path: "detail-content-selector", component: ContentSelectorDetailComponent},
              {path: "update-content-selector", component: ContentSelectorUpdateComponent},
            ]},
          {path: "operator-history", children:[
              {path:"", component:OperatorHistoryMainComponent},
              {path: "operator-history-detail", component: OperatorHistoryDetailComponent},
              {path: "operator-history-delete", component: OperatorHistoryDeleteComponent},
              {path: "operator-history-update", component: OperatorHistoryUpdateComponent},
            ]}
        ]},

      //-------------------SYSTEM--------------------------------//
      {path: "system", children:[
          {path: "", redirectTo: "manage-user", pathMatch: "full"},
          {path: "manage-user", children:[
              {path:"", component:UserManagerMainComponent},
              {path: "create-user", component: UserCreateFormComponent},
              {path: "detail-user", component: UserDetailFormComponent},
              {path: "update-user", component: UserEditFormComponent},
              {path: "delete-user", component: UserDeleteFormComponent},
            ]},
          {path: "store-list", children:[
              {path:"", component:StoreMainComponent},
              {path: "create-store", component: StoreListCreateComponent},
              {path: "detail-store", component: StoreListDetailComponent},
              {path: "update-store", component: StoreListEditComponent},
              {path: "delete-store", component: StoreListDeleteComponent},
            ]},
          {path: "noti-daily", children:[
              {path:"", component:NotiMainComponent},
              {path: "create-noti", component: NotiCreateFormComponent},
              {path: "detail-noti", component: NotiDetailFormComponent},
              {path: "update-noti", component: NotiEditFormComponent},
              {path: "delete-noti", component: NotiDeleteFormComponent},
            ]},
          {path: "area-device", children:[
              {path:"", component:DeviceMainComponent},
              {path: "create-device", component: DeviceCreateFormComponent},
              {path: "detail-device", component: DeviceDetailFormComponent},
              {path: "update-device", component: DeviceEditFormComponent},
              {path: "delete-device", component: DeviceDeleteFormComponent},
            ]},

        ]},

      //-------------------FILES--------------------------------//
      {path: "files", children:[
          {path: "", redirectTo: "broadcast-schedule", pathMatch: "full"},
          {path: "broadcast-schedule", children:[
              {path:"", component: ScheduleTableFormComponent},
              {path: "create-schedule", component: ScheduleCreateFormComponent},
              {path: "detail-schedule", component: ScheduleDetailFormComponent},
              {path: "update-schedule", component: ScheduleUpdateFormComponent},
              {path: "delete-schedule", component: ScheduleDeleteFormComponent},
            ]},
          {path: "play-list", children:[
              {path:"", component:PlaylistTableFormComponent},
              {path: "create-playlist", component: PlaylistCreateFormComponent},
              {path: "detail-playlist", component: PlaylistDetailFormComponent},
              {path: "update-playlist", component: PlaylistUpdateFormComponent},
              {path: "delete-playlist", component: PlaylistDeleteFormComponent},
            ]},
          {path: "videos", children:[
              {path:"", component:VideosTableFormComponent},
              {path: "create-videos", component: VideosCreateFormComponent},
              {path: "detail-videos", component: VideosDetailFormComponent},
              {path: "update-videos", component: VideosUpdateFormComponent},
              {path: "delete-videos", component: VideosDeleteFormComponent},
            ]},


        ]},

      //-------------------REPORT--------------------------------//
      {path: "reports", children:[
          {path: "", redirectTo: "history-broadcast", pathMatch: "full"},
          {path: "history-broadcast", children:[
              {path:"", component:BroadcastTableFormComponent},
              {path: "create-broadcast", component: BroadcastCreateFormComponent},
              {path: "detail-broadcast", component: BroadcastDetailFormComponent},
              {path: "update-broadcast", component: BroadcastUpdateFormComponent},
              {path: "delete-broadcast", component: BroadcastDeleteFormComponent},
            ]},
          {path: "history-insurance", children:[
              {path:"", component:InsuranceTableFormComponent},
              {path: "create-insurance", component: InsuranceCreateFormComponent},
              {path: "detail-insurance", component: InsuranceDetailFormComponent},
              {path: "update-insurance", component: InsuranceUpdateFormComponent},
              {path: "delete-insurance", component: InsuranceDeleteFormComponent},
            ]},
          {path: "history-support", children:[
              {path:"", component:SupportTableFormComponent},
              {path: "create-support", component: SupportCreateFormComponent},
              {path: "detail-support", component: SupportDetailFormComponent},
              {path: "update-support", component: SupportUpdateFormComponent},
              {path: "delete-support", component: SupportDeleteFormComponent},
            ]},


        ]},
      {path:"home", component: HomeMainComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
