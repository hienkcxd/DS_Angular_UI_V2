import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoleAdminGuard implements CanActivateChild {
  constructor(private auth : AuthService, private router:Router) {
  }
  canActivateChild(){
    if(this.auth.isRoleAdmin()){
      return true;
    }else {
      alert('admin guard - không có quyền vào trang này')
      this.router.navigate(['/user/home'])
      return false;
    }
  }
}
