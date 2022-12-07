import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";
import {data} from "jquery";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  demo!:string;
  constructor(private auth : AuthService, private router:Router) {
  }
  canActivate(){
    if(this.auth.isLoggedIn()){
      return true
    }else {
      alert("Không có quyền truy cập!!!")
      localStorage.removeItem('access_token')
      this.router.navigate(['/login'])
      return false;
    }
  }

}
