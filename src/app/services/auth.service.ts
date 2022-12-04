import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  private baseUrl_Login="http://localhost:8080/api/login";
  loginUser(user : User):Observable<object>{
    console.log("auth", user);
    const params = new HttpHeaders()
      .set('username', user.username)
      .set('password', user.password);
    return this.httpClient.post(this.baseUrl_Login, {'username':user.username, 'password':user.password});
  }
}
