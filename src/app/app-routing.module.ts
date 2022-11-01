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
import {VideosMainComponent} from "./module/files/videos/videos-main/videos-main.component";
import {FormUploadVideoComponent} from "./module/files/videos/form-upload-video/form-upload-video.component";
import {
  BroadcastScheduleMainComponent
} from "./module/files/broadcast-schedule/broadcast-schedule-main/broadcast-schedule-main.component";

const routes: Routes = [
  // {path:"", component: LoginComponent},
  // {path:"404", component: Errors404Component},
  // {path:"500", component: Errors500Component},
  {
    path: "files/videos",
    children: [
      {path: "", component: VideosMainComponent},
      {path:"upload", component:  FormUploadVideoComponent},
    ]
  },
  {path:"home", component: HomeMainComponent},
  {path:"user-detail", component: ProfileMainComponent},
  {path: "manage-user", component:UserManagerMainComponent},
  {path: "store-list", component:StoreMainComponent},
  {path: "area-device", component:DeviceMainComponent},
  {path: "noti-daily", component:NotiMainComponent},
  {path: "broadcast-schedule", component:BroadcastScheduleMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
