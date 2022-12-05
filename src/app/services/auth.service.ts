import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "../model/user";
import {catchError, map, observable, Observable} from "rxjs";
import * as Domain from "domain";
import {data} from "jquery";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  private baseUrl_Login = "http://localhost:8080";

  loginUser(user : User):Observable<object>{
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

    return this.httpClient.post(`${this.baseUrl_Login}/api/login`, body.toString(), httpOptions)
      .subscribe(data=>{
        localStorage.setItem('token',data.toString());
      });
  }


}
