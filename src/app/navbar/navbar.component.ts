import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MdcMenu, MdcMenuItem } from '@angular-mdc/web';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {

  private user: User;
  private selectedIndex = -1;
  private isSearchVisible = false;
  private isMobile: boolean;

  constructor(private auth: AuthService,  private router: Router ) {
    this.user = auth.getUserData();
    this.isMobile = window.innerWidth < 840;
  }

  @ViewChild('menu') menu: MdcMenu;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = window.innerWidth < 840;
  }
  ngOnInit() {
  }

  showSearchBar() {
    this.isSearchVisible = true;
  }

  hideSearchBar() {
    this.isSearchVisible = false;
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
