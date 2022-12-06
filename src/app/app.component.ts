import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DS_Angular_UI_V2';
  isLoggin!:boolean;
  constructor(private auth:AuthService) {
  }
  Logged(){
    console.log('component test: ' + this.isLoggin)
    return this.isLoggin = this.auth.isLoggedIn();
  }
}
