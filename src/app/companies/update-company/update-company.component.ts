import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Companies} from "../../companies";
import {CompanyService} from "../../services/company.service";
import {DataserviceService} from "../../services/dataservice.service";
import {Router} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss']
})
export class UpdateCompanyComponent implements OnInit {
  updateCompanyForm: FormGroup;
  companies: Companies[];
  CompanyName: string;
  description: string;
  companyData: any;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private companyService: CompanyService,
              private dataService: DataserviceService,
              public metaService: Meta,
              public titleService: Title,
              private router: Router) {
    this.updateCompanyForm = this.fb.group({
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
    this.companyService.getCompany().subscribe((companies: Companies[]) => {
      this.companies = companies;
      this.CompanyName = this.companies[0].CompanyName;
      this.description = this.companies[0].description;
    })
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }

  postCompany(values) {
    const companyData = new FormData();
    companyData.append('Leader', this.dataService.getToken());
    companyData.append('Faction', values.Faction);
    companyData.append('Server', values.Server);
    companyData.append('Focus', values.Focus);
    companyData.append('Size', values.Size);
    companyData.append('Language', values.Language);
    companyData.append('Voice', values.Voice);
    companyData.append('CompanyName', values.CompanyName);
    companyData.append('description', values.description);
    companyData.append('CompanyId', this.companyService.getCompanyToken());
    this.companyService.updateCompany(companyData).subscribe(result => {
      this.router.navigate(['companies/' + this.companyService.getCompanyToken()]);
    });
  }
}
