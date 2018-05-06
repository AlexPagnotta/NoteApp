import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  signUp(){

    let email ="test3@test.it";
    let name = "Ciaone";
    let password ="test";

    this.auth.signup(email,name,password)
    .then((result) => {
      console.log("ok: ",result);
      let data = JSON.parse(result); 
      this.auth.setToken(data['token']);
    })
    .catch((err) => {
      console.log("error: ",err.message);
    });
  }
}
