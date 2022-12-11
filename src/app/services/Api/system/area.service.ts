import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../../auth.service";

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http:HttpClient, private auth:AuthService) { }
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

  getArea():Observable<any>{
    return this.http.get(`${this.baseUrl()}/area`,{headers: this.httpOptions.headers});
  }
}
