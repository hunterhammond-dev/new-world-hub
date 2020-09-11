import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Topics } from '../topics';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  redirectUrl: string;

  baseUrl = 'https://newworldhub.com/api';

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(public httpClient: HttpClient, private router: Router) { }
  public userlogin(username, password) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(Usermodule => {
        this.setToken(Usermodule[0].uid);
        this.getLoggedInName.emit(true);
        return Usermodule;
      }));
  }
  public userregistration( name, email, pwd) {
    return this.httpClient.post<any>(this.baseUrl + '/signup.php', { name, email, pwd })
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(Usermodule => {
        return Usermodule;
      }));
  }

  uploadProfilePicture(profilePicture, uid) {
    return this.httpClient.put<any>(this.baseUrl + '/uploadProfilePicture.php', { profilePicture, uid })
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(Usermodule => {
        return Usermodule;
      }));
  }

  public uploadFile(data) {
    const uploadURL = `${this.baseUrl}/upload.php`;
    return this.httpClient.post<any>(uploadURL, data);
  }

  getHomeTopics(): Observable<Topics[]> {
    return this.httpClient.get<Topics[]>(this.baseUrl + '/home-topic-data.php');
  }

  getUserDetails() {
    return this.httpClient.get(this.baseUrl + '/data.php?uid=' + (this.getToken()));
  }

  updateEmail(email, uid) {
    return this.httpClient.put<any>(this.baseUrl + '/updateEmail.php', { email, uid })
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(Usermodule => {
        return Usermodule;
      }));
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    return usertoken != null;
  }

}
