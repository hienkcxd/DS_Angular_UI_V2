import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user)
  }

}
