import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpStatusCode} from "@angular/common/http";
import {User} from "../model/user";
import {Router} from "@angular/router";
import jwtDecode, {JwtPayload} from "jwt-decode";
import {map} from "rxjs";
import {data} from "jquery";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }
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

    isLoggedIn(){
      let httpOptions = {
        headers: new HttpHeaders().set('Authorization',`${localStorage.getItem('access_token')}`),
        responseType: 'text' as 'json'
      };
      let status = this.httpClient.get<object>(`${this.baseUrl_Login}/api/login-token`,httpOptions).subscribe(data=>{

      }, error => {
        return false;
      })
      console.log(Object.values(status)[0])
      return true;
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
