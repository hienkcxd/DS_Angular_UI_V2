import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../auth.service";
import {Observable} from "rxjs";
import {User} from "../../../model/user";
import {Router} from "@angular/router";
import {data} from "jquery";

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http:HttpClient, private auth:AuthService, private router: Router) {

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`${localStorage.getItem('access_token')}`,
    }),
  }
  baseUrl(){
    if(this.auth.isRoleUser()){
      return "http://localhost:8080/api/user";
    }
    else {
      return "http://localhost:8080/api/admin";
    }
  }

  getUserDetail():Observable<any>{
    return this.http.get(`${this.baseUrl()}/user-detail`,{headers: this.httpOptions.headers});
  }

  changePassword(user:User){
    let httpOptions = {
      headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded',),
      'Authorization':`${localStorage.getItem('access_token')}`,
      responseType: 'text' as 'json'
    };
    let body = new URLSearchParams();
    body.set('current-password', user.password);
    body.set('new-password', user.newPassword);

    alert('gui du loieu')
    return this.http.post(`http://localhost:8080/api/change-password`, body.toString(), httpOptions);
  }
}
