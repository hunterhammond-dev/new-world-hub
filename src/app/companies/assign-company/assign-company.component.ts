import { Component, OnInit } from '@angular/core';
import {DataserviceService} from "../../services/dataservice.service";
import {CompanyService} from "../../services/company.service";
import {Assignment} from "../../assign-company";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-assign-company',
  templateUrl: './assign-company.component.html',
  styleUrls: ['./assign-company.component.scss']
})
export class AssignCompanyComponent implements OnInit {

  assign: Assignment[];
  assignmentForm: FormGroup;

  constructor(private dataService: DataserviceService,
              private companyService: CompanyService,
              public metaService: Meta,
              public titleService: Title,
              private fb: FormBuilder,
              private router: Router) {
    this.assignmentForm = this.fb.group({
      username: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }

  assignComp(value) {
    const assignData = new FormData();
    assignData.append('companyAssignmentId', this.companyService.getCompanyToken() + this.dataService.getToken() + value.username);
    assignData.append('companyId', this.companyService.getCompanyToken());
    assignData.append('uid', this.dataService.getToken());
    assignData.append('username', value.username);
  }

}
