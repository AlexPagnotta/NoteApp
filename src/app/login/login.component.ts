import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  logIn(){
    console.log("trt");
    let email ="test@test.it";
    let password ="test";
    let result = this.auth.login(email,password);
    console.log(result);
  }

}
