import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private user:User;

  constructor(private auth:AuthService) {
    this.user = auth.getUserData();
    alert(this.user.email);
  }

  ngOnInit() {
  }

  logOut(){
    alert(this.user.email);
    
  }

}
