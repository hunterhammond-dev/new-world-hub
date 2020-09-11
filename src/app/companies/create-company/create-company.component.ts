import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataserviceService} from "../../services/dataservice.service";
import {Router} from "@angular/router";
import {CompanyService} from "../../services/company.service";
import {Companies} from "../../companies";
import {ForumService} from "../../services/forum.service";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
  createCompanyForm: FormGroup;
  companies: Companies[];

  companyData: any;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private companyService: CompanyService,
              private dataService: DataserviceService,
              public metaService: Meta,
              public titleService: Title,
              private router: Router) {
    this.createCompanyForm = this.fb.group({
      CompanyName: ['', Validators.required],
      description: ['', Validators.required],
      Faction: ['', Validators.required],
      Server: ['', Validators.required],
      Focus: ['', Validators.required],
      Size: ['', Validators.required],
      Language: ['', Validators.required],
      Voice: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }

  postCompany(values) {
    const companyData = new FormData();
    companyData.append('Leader', this.dataService.getToken());
    companyData.append('description', values.description);
    companyData.append('Faction', values.Faction);
    companyData.append('Server', values.Server);
    companyData.append('Focus', values.Focus);
    companyData.append('Size', values.Size);
    companyData.append('Language', values.Language);
    companyData.append('Voice', values.Voice);
    companyData.append('CompanyName', values.CompanyName);
    this.companyService.createCompany(companyData).subscribe(result => {
      this.router.navigate(['companies']);
    });
  }
}
