import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./module/login/login/login.component";


const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent}
  //-------------------DEVICE--------------------------------//
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
