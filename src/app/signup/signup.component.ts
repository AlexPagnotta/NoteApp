import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../classes/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  signUp(form: NgForm) {

    if (!form.valid) {
      return false;
    }

    const email = form.value.email;
    const name = form.value.name;
    const password = form.value.password;

    this.auth.signup(email, name, password)
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
      console.log('error: ', err.message);
    });
  }

  logIn() {
    this.router.navigate(['login']);
  }
}
