import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataserviceService} from '../services/dataservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;
  uploadResponse;

  userID: any;
  userData: any;
  email: string;
  selectedFile: File;

  constructor(private dataService: DataserviceService,
              private router: Router,
              private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private titleService: Title,
              private metaService: Meta) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      avatar: ['']
    });
    this.userID = this.dataService.getToken();
    this.loadUserDetails(this.userID);

    this.titleService.setTitle('Dashboard | New World Hub');
    // tslint:disable-next-line:max-line-length
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    // tslint:disable-next-line:max-line-length
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }

  changeEmail() {
    this.dataService.updateEmail(this.email , this.dataService.getToken()).subscribe(user => {
      this.userData = user;
    });
  }

  loadUserDetails(userID) {
    this.dataService.getUserDetails().subscribe(user => {
      this.userData = user;
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('avatar', this.form.get('avatar').value);

    const nameData = this.form.get('avatar').value;

    this.dataService.uploadProfilePicture(nameData.name, this.dataService.getToken()).subscribe(user => {
      this.userData = user;
    });

    this.dataService.uploadFile(formData).subscribe(
      (res) => {
        this.uploadResponse = res;
        this.ngOnInit();
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
