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

const routes: Routes = [
  // {path:"", component: LoginComponent},
  // {path:"404", component: Errors404Component},
  // {path:"500", component: Errors500Component},
  {path: "system", children:[
      {path: "", redirectTo: "manage-user", pathMatch: "full"},
      {path: "manage-user", children:[
          {path:"", component:UserManagerMainComponent},
          {path: "create-user", component: UserCreateFormComponent},
          {path: "detail-user", component: UserCreateFormComponent},
          {path: "update-user", component: UserCreateFormComponent},
          {path: "delete-user", component: UserCreateFormComponent},
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
