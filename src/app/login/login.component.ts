import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { User } from '../classes/user';
import { EventEmitter } from '@angular/core';
import { Injectable, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  logIn(form:NgForm){	

    if(!form.valid){
      return;
    }

    let email = form.value.email;
    let password = form.value.password;

    this.auth.login(email,password)
    .then((result) => {
      console.log("ok: ",result);
      let data = JSON.parse(result); 
      let user = new User();
      user.name = ""; //Return user data from call
      user.email = "";
      this.auth.setToken(data['token'], user); 
      this.router.navigate(['']);
    })
    .catch((err) => {
      console.log("error: ",err.message);
    });
  }

}
