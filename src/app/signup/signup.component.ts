import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';
import { PasswordValidation } from './validators/password-validation';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private dataService: DataserviceService, public metaService: Meta,
              public titleService: Title, private router: Router) {

    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      pwd: ['', Validators.required],
      confirmPwd: ['', Validators.required],
      name: ['', Validators.required]

    }, {
      validator: PasswordValidation('pwd', 'confirmPwd')
    });
   }

  ngOnInit() {
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }

  get f() { return this.angForm.controls; }

  postdata(angForm) {
    this.submitted = true;

    if (this.angForm.invalid) {
      return;
    }

    this.dataService.userregistration(angForm.value.name, angForm.value.email, angForm.value.pwd)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['login']);
          });
  }

  get email() { return this.angForm.get('email'); }
  get pwd() { return this.angForm.get('pwd'); }
  get name() { return this.angForm.get('name'); }
  get mobile() { return this.angForm.get('mobile'); }
}
