import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user";
import {Router} from "@angular/router";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }
  private baseUrl_Login = "http://localhost:8080";

  result = false

  loginUser(user : User){
    let httpOptions = {
      headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded',),
      responseType: 'text' as 'json'
    };
    let body = new URLSearchParams();
    body.set('username', user.username);
    body.set('password', user.password);

    return this.httpClient.post(`${this.baseUrl_Login}/api/login`, body.toString(), httpOptions).subscribe(data=>{
        let token = JSON.parse(data.toString());
        let access_token = Object.values(token)[0];
        let refresh_token = Object.values(token)[1];
        this.result = true;
        if (typeof access_token === "string" && typeof refresh_token === "string") {
          console.log('role: '+Object.values(jwtDecode<object>(access_token))[1])
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('refresh_token', refresh_token);
        }
        console.log(localStorage.getItem('access_token'))
        alert("success");
      if(this.isRoleAdmin()){
        console.log("vao role admin")
        this.router.navigate(['/home'])
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

  isLoggedIn():boolean{
    let httpOptions = {
          headers: new HttpHeaders().set('Authorization', `${localStorage.getItem('access_token')}`),
          responseType: 'text' as 'json'
        };
        this.httpClient.get(`${this.baseUrl_Login}/api/login-token`, httpOptions)
          .subscribe(data => {
            let dataJson = JSON.parse(data.toString());
            let secret = Object.values(dataJson)[0];
            this.result = true;
            localStorage.setItem('secret', <string>secret);
            return true;
          }, error=>{
            this.router.navigate(['/login'])
          })
    return this.result;
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
