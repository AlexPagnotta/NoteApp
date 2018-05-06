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
    let email ="dbalistreri@example.org";
    let password ="secret";

    this.auth.login(email,password)
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
