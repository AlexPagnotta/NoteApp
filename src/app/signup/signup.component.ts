import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router ) { }

  ngOnInit() {
  }

  signUp(form:NgForm){

    if(!form.valid){
      return false;
    }

    let email = form.value.email;
    let name = form.value.name;
    let password = form.value.password;

    this.auth.signup(email,name,password)
    .then((result) => {
      console.log("ok: ",result);
      let data = JSON.parse(result); 
      this.auth.setToken(data['token']);
      this.router.navigate(['']);
    })
    .catch((err) => {
      console.log("error: ",err.message);
    });
  }
}
