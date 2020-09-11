import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { TopicsComponent } from './forum/topics/topics.component';
import { PostsComponent } from './forum/posts/posts.component';
import { CreateTopicComponent } from './forum/create-topic/create-topic.component';
import { CreateCategoryComponent } from './forum/create-category/create-category.component';
import { GuidesComponent } from './guides/guides.component';
import { GuideComponent } from './guides/guide/guide.component';
import { Guide1Component } from './guides/guide1/guide1.component';
import { UpdateTopicComponent } from './forum/update-topic/update-topic.component';
import { CompaniesComponent } from './companies/companies.component';
import { CreateCompanyComponent } from './companies/create-company/create-company.component';
import { CompanyComponent } from './companies/company/company.component';
import { UpdateCompanyComponent } from './companies/update-company/update-company.component';
import { NewsComponent } from './news/news.component';
import { AssignCompanyComponent } from './companies/assign-company/assign-company.component';
import { ProgressionComponent } from './progression/progression.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'forum/:topicId', component: TopicsComponent },
  { path: 'forum/:topicId/:postId', component: PostsComponent},
  { path: 'createTopic', component: CreateTopicComponent },
  { path: 'createCategory', component: CreateCategoryComponent},
  { path: 'updateTopic', component: UpdateTopicComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'guides/new-world-invasions-multiplayer-pve-experience', component: GuideComponent },
  { path: 'news', component: NewsComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/:CompanyId', component: CompanyComponent },
  { path: 'updateCompany', component: UpdateCompanyComponent },
  { path: 'createCompany', component: CreateCompanyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: SignupComponent },
  { path: 'dashboard/:uid', component: DashboardComponent },
  { path: 'assignCompany', component: AssignCompanyComponent },
  { path: 'progression', component: ProgressionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
