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
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) { }

  hasLoginError = false;
  loginErrorText = '';

  ngOnInit() {
  }

  logIn(form: NgForm) {

    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.auth.login(email, password)
    .then((result) => {
      console.log('ok: ', result);
      const data = JSON.parse(result);
      const user = new User();
      user.name = data['name'];
      user.email = data['email'];
      this.auth.setToken(data['token'], user);
      this.router.navigate(['']);
    })
    .catch((err) => {
      this.hasLoginError = true;
      this.loginErrorText = err.message;
      console.log('error: ', err.message);
    });
  }

  signUp() {
    this.router.navigate(['signup']);
  }

}
