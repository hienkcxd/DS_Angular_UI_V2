import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {AuthService} from "../../../services/auth.service";
import {data} from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user)
    this.authService.loginUser(this.user).subscribe(data=>{
      alert("login success");
    },error=>alert("failed"))
  }

}
