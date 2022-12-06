import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./module/login/login/login.component";
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
