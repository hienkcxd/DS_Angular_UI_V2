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
import * as path from "path";
import {UserCreateFormComponent} from "./module/system/user-manager/user-create-form/user-create-form.component";
import {StoreListCreateComponent} from "./module/system/store-list/store-list-create/store-list-create.component";
import {UserEditFormComponent} from "./module/system/user-manager/user-edit-form/user-edit-form.component";
import {UserDeleteFormComponent} from "./module/system/user-manager/user-delete-form/user-delete-form.component";
import {UserDetailFormComponent} from "./module/system/user-manager/user-detail-form/user-detail-form.component";
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
  BroadcastCreateFormComponent
} from "./module/reports/history-broadcast/broadcast-create-form/broadcast-create-form.component";
import {
  BroadcastTableFormComponent
} from "./module/reports/history-broadcast/broadcast-table-form/broadcast-table-form.component";
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

const routes: Routes = [
  // {path:"", component: LoginComponent},
  // {path:"404", component: Errors404Component},
  // {path:"500", component: Errors500Component},
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
// ------------------------------------------------REPORTS----------------------------------------
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
          {path: "create-supports", component: SupportCreateFormComponent},
          {path: "detail-supports", component: SupportDetailFormComponent},
          {path: "update-supports", component: SupportUpdateFormComponent},
          {path: "delete-supports", component: SupportDeleteFormComponent},

        ]},

    ]},




  {path:"home", component: HomeMainComponent},
  {path:"user-detail", component: ProfileMainComponent},
  {path: "store-list", component:StoreMainComponent},
  {path: "area-device", component:DeviceMainComponent},
  {path: "noti-daily", component:NotiMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





