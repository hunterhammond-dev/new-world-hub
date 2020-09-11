import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "../services/dataservice.service";
import { Router } from "@angular/router";
import {Guides} from "../guides";
import {CompanyService} from "../services/company.service";
import {Companies} from "../companies";
import {ForumService} from "../services/forum.service";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies: Companies[];

  constructor(public dataService: DataserviceService,
              public router: Router,
              public companyService: CompanyService,
              public forumService: ForumService,
              public metaService: Meta,
              public titleService: Title) { }

  ngOnInit() {
    if(this.dataService.isLoggedIn()) {
      this.companyService.getCompanies().subscribe((companies: Companies[]) => {
        this.companies = companies;
      });
    } else {
      this.router.navigate(['login']);
    }
    this.titleService.setTitle("Companies | New World Hub");
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }
}
