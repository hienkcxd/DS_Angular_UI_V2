import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "../model/user";
import {BehaviorSubject, catchError, map, observable, Observable} from "rxjs";
import * as Domain from "domain";
import {data} from "jquery";
import {Router} from "@angular/router";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Role} from "../model/role";
import jwtDecode, {JwtPayload} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, public router: Router) { }
  private baseUrl_Login = "http://localhost:8080";

  loginUser(user : User){
    let httpOptions = {
      headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded',),
      responseType: 'text' as 'json'
    };
    let body = new URLSearchParams();
    body.set('username', user.username);
    body.set('password', user.password);
    const params = new HttpHeaders()
      .set('username', user.username)
      .set('password', user.password);
    return this.httpClient.post(`${this.baseUrl_Login}/api/login`, body.toString(), httpOptions).subscribe(data=>{
        let token = JSON.parse(data.toString());
        let access_token = Object.values(token)[0];
        let refresh_token = Object.values(token)[1];
        if (typeof access_token === "string" && typeof refresh_token === "string") {
          console.log('role: '+Object.values(jwtDecode<object>(access_token))[1])
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('refresh_token', refresh_token);
        }
        console.log(localStorage.getItem('access_token'))
        alert("success");
      if(this.isRoleAdmin()){
        console.log("vao role admin")
        this.router.navigate(['/admin/home'])
      }else if(this.isRoleUser()){
        console.log("vao role user")
        this.router.navigate(['/home'])
      }else {
        console.log(this.isRoleAdmin())
        this.router.navigate(['/login'])
      }
      },error=>{
        alert("Sai tên đăng nhập hoặc mật khẩu!!!")
        this.router.navigate(['/login'])
      });
    }
    isLoggedIn(apiUrl:string){
      let httpOptions = {
        headers: new HttpHeaders()
          .set('Authorization',  `${localStorage.getItem('access_token')}`)
      };
      return this.httpClient.post(`${this.baseUrl_Login}+${apiUrl}`,httpOptions).subscribe(data=>{
        return true;
      },error=>{
        return false;
      });
    }


    isRoleAdmin(){
      let tokenCur = localStorage.getItem('access_token');
      if(tokenCur != null && typeof tokenCur === "string"){
        let roleCur = jwtDecode<object>(tokenCur);
        if(Object.values(roleCur)[1] == "ROLE_ADMIN"){
          return true;
        }else {
          return false;
        }
      }
    return false;
    }

    isRoleUser(){
      let tokenCur = localStorage.getItem('access_token');
      if(tokenCur != null && typeof tokenCur === "string"){
        let roleCur = jwtDecode<object>(tokenCur);
        if(Object.values(roleCur)[1] == "ROLE_USER"){
          return true;
        }else {
          return false;
        }
      }
      return false;
    }

}
