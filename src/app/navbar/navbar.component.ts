import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private user: User;

  constructor(private auth: AuthService,  private router: Router ) {
    this.user = auth.getUserData();
  }

  ngOnInit() {
  }

  logOut() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
