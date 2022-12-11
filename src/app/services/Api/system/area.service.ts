import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`${localStorage.getItem('access_token')}`,
    }),
  }
  baseUrl = "http://localhost:8080";

  getArea():Observable<any>{
    return this.http.get(`${this.baseUrl}/api/user/area`,{headers: this.httpOptions.headers});
  }
}
