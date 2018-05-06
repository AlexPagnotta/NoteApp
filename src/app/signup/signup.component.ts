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
    console.log("trt");
    let email ="test3@test.it";
    let name = "Ciaone";
    let password ="test";
    let result = this.auth.signup(email,name,password);
    console.log(result);
  }
}
