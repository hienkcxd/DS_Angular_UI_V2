import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeMainComponent} from "./module/home/home-main/home-main.component";
import {ProfileMainComponent} from "./module/profile/profile-main/profile-main.component";

const routes: Routes = [
  // {path:"", component: LoginComponent},
  // {path:"404", component: Errors404Component},
  // {path:"500", component: Errors500Component},
  {path:"home", component: HomeMainComponent},
  {path:"user-detail", component: ProfileMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
