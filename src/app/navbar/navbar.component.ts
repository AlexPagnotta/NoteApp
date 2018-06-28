import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MdcMenu, MdcMenuItem } from '@angular-mdc/web';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private user: User;
  private selectedIndex = -1;

  constructor(private auth: AuthService,  private router: Router ) {
    this.user = auth.getUserData();
  }

  @ViewChild('menu') menu: MdcMenu;

  ngOnInit() {
  }

  handleMenuSelect(event: { index: number, item: MdcMenuItem }) {
    if (event.index === 0) {
      this.logOut();
    }
  }

  logOut() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
