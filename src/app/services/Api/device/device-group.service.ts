import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceGroupService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`${localStorage.getItem('access_token')}`,
    }),
  }
  baseUrl = "http://localhost:8080";

  getAllDeviceGroup():Observable<any>{
    return this.http.get(`${this.baseUrl}/api/user/device-group`,{headers: this.httpOptions.headers});
  }
}
