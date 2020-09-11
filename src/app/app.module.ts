import { BrowserModule, Title } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {Location, PathLocationStrategy, LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForumComponent } from './forum/forum.component';
import { TopicsComponent } from './forum/topics/topics.component';
import { PostsComponent } from './forum/posts/posts.component';
import { CreateTopicComponent } from './forum/create-topic/create-topic.component';
import { CreateCategoryComponent } from "./forum/create-category/create-category.component";
import { GuidesComponent } from "./guides/guides.component";
import { GuideComponent } from "./guides/guide/guide.component";
import { Guide1Component } from "./guides/guide1/guide1.component";
import { CompaniesComponent } from "./companies/companies.component";
import { CompanyComponent } from "./companies/company/company.component";
import { CreateCompanyComponent } from "./companies/create-company/create-company.component";
import { UpdateTopicComponent } from "./forum/update-topic/update-topic.component";
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FlexLayoutModule } from '@angular/flex-layout';
import { UpdateCompanyComponent } from "./companies/update-company/update-company.component";
import { NewsComponent } from "./news/news.component";
import { AssignCompanyComponent } from "./companies/assign-company/assign-company.component";
import { ProgressionComponent } from "./progression/progression.component";

import { NgxPaginationModule } from 'ngx-pagination';
import { AdsenseModule } from "ng2-adsense";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ForumComponent,
    TopicsComponent,
    PostsComponent,
    CreateTopicComponent,
    CreateCategoryComponent,
    GuidesComponent,
    GuideComponent,
    Guide1Component,
    UpdateTopicComponent,
    CompaniesComponent,
    CreateCompanyComponent,
    CompanyComponent,
    UpdateCompanyComponent,
    NewsComponent,
    AssignCompanyComponent,
    ProgressionComponent
  ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        CoreModule,
        SharedModule,
        MatListModule,
        FontAwesomeModule,
        FlexLayoutModule,
        NgxPaginationModule,
        AdsenseModule.forRoot()
    ],
  providers: [
    Title,
    Location,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
