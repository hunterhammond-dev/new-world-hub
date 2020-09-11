import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';
import { MaterialModule } from '../material.module';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private dataService: DataserviceService, public metaService: Meta,
              public titleService: Title, private router: Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }
  postdata(angForm) {
    this.dataService.userlogin(angForm.value.email, angForm.value.password)
      .pipe(first())
      .subscribe(
          data => {
                const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard/' + this.dataService.getToken();
                this.router.navigate([redirect]);

          },
          error => {
              alert('User name or password is incorrect');
          });
  }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
}
