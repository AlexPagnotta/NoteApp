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

    let email ="test@test.it";
    let password ="test";

    this.auth.login(email,password)
    .then((result) => {
      console.log("ok: ",result);
      this.auth.setToken(result);
    })
    .catch((err) => {
      console.log("error: ",err.message);
    });
  }

}
