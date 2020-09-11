import { Component, OnInit } from '@angular/core';
import {Companies} from "../../companies";
import {CompanyService} from "../../services/company.service";
import {DataserviceService} from "../../services/dataservice.service";
import {ForumService} from "../../services/forum.service";
import {Assignment} from "../../assign-company";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  deleteBool = 0;

  faTimes = faTimesCircle;

  companies: Companies[];
  assignment: Assignment[];

  constructor(public companyService: CompanyService,
              public dataService: DataserviceService,
              public forumService: ForumService,
              private titleService: Title,
              private metaService: Meta) { }

  ngOnInit() {
    this.companyService.getCompany().subscribe((companies: Companies[]) => {
      this.companies = companies;
      this.titleService.setTitle(this.companies[0].CompanyName + " | Companies | New World Hub");
      this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
      this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
    });
    this.companyService.getMember().subscribe((assignment: Assignment[]) => {
      this.assignment = assignment;
    })
  }

  deleteMember() {
    this.companyService.removeMember(this.companyService.getMemberToken()). subscribe(result => {
      this.ngOnInit();
    });
  }

}
