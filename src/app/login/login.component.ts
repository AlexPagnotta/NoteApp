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
    .then(function(result)
    {
      console.log(result);
    }, function(error) {
      console.log(error);
    });  
  }

}
