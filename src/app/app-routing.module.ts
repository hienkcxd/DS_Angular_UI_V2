import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./module/home/home/home.component";
import {ProfileComponent} from "./module/profile/profile/profile.component";

const routes: Routes = [
  // {path:"", component: LoginComponent},
  // {path:"404", component: Errors404Component},
  // {path:"500", component: Errors500Component},
  {path:"home", component: HomeComponent},
  {path:"user-detail", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
