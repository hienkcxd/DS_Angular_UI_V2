import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`${localStorage.getItem('access_token')}`,
    }),
  }
  baseUrl = "http://localhost:8080";

  getAllPlayList():Observable<any>{
    return this.http.get(`${this.baseUrl}/api/user/playlist`,{headers: this.httpOptions.headers});
  }
}
