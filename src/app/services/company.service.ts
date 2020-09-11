import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Guides} from "../guides";
import {Companies} from "../companies";
import {Topics} from "../topics";
import {Assignment} from "../assign-company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = 'https://newworldhub.com/api';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Companies[]> {
    return this.http.get<Companies[]>(this.baseUrl + '/company-data.php');
  }

  getCompany(): Observable<Companies[]> {
    return this.http.get<Companies[]>(this.baseUrl + '/one-company-data?CompanyId=' + (this.getCompanyToken()));
  }

  createCompany(data) {
    return this.http.post(this.baseUrl + '/create-company.php', data);
  }

  updateCompany(data){
    return this.http.post(this.baseUrl + '/update-company.php', data);
  }

  assignCompany(data) {
    return this.http.post(this.baseUrl + '/assign-company.php', data);
  }

  getMember(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.baseUrl + '/company-members.php?companyId=' + (this.getCompanyToken()));
  }

  removeMember(companyAssignment: string) {
    return this.http.delete(`${this.baseUrl}/remove-member.php?companyAssignmentId=${companyAssignment}`);
  }

  setCompanyToken(companyToken: number) {
    localStorage.setItem('companyToken', String(companyToken));
  }

  getCompanyToken() {
    return localStorage.getItem('companyToken');
  }

  setMemberToken(memberToken: string) {
    localStorage.setItem('memberToken', String(memberToken));
  }

  getMemberToken() {
    return localStorage.getItem('memberToken');
  }
}
