import {Component, OnInit} from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  loginbtn: boolean;
  logoutbtn: boolean;

  faInbox = faInbox;

  constructor(public dataService: DataserviceService, public router: Router) {

  }

  ngOnInit() {
    this.dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if (this.dataService.isLoggedIn()) {
      console.log('loggedin');
      this.loginbtn = false;
      this.logoutbtn = true;
    } else {
      this.loginbtn = true;
      this.logoutbtn = false;
    }
  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  logout() {
    this.dataService.deleteToken();
    window.location.href = '/#/login';
    this.ngOnInit();
  }
}
