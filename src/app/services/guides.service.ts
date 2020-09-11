import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Guides} from "../guides";
import {DataserviceService} from "./dataservice.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GuidesService {

  baseUrl = 'https://newworldhub.com/api';

  constructor(private http: HttpClient, private router: Router, public dataService: DataserviceService) { }

  getGuides(): Observable<Guides[]> {
    return this.http.get<Guides[]>(this.baseUrl + '/guide-data.php');
  }

  getHomeGuides(): Observable<Guides[]> {
    return this.http.get<Guides[]>(this.baseUrl + '/home-guide-data.php');
  }

  getGuide(): Observable<Guides[]> {
    return this.http.get<Guides[]>(this.baseUrl + '/one-guide-data?guideId=' + (this.getGuideToken()));
  }

  createGuide(data) {
    return this.http.post(this.baseUrl + '/create-guide.php', data);
  }

  setGuideToken(guideToken: number) {
    localStorage.setItem('guideToken', String(guideToken));
  }

  getGuideToken() {
    return localStorage.getItem('guideToken');
  }

  setGuideSubject(guideSubject: string) {
    localStorage.setItem('guideSubject', String(guideSubject));
  }

  getGuideSubject() {
    return localStorage.getItem('guideSubject');
  }

  uploadGuideImage(image, guideId) {
    return this.http.put<any>(this.baseUrl + '/uploadGuideImage.php', { image, guideId })
      .pipe(map(Guides => {
        return Guides;
      }));
  }

  public uploadFile(data) {
    const uploadURL = `${this.baseUrl}/upload.php`;
    return this.http.post<any>(uploadURL, data);
  }
}
