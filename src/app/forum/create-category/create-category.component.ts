import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../category";
import {ForumService} from "../../services/forum.service";
import {Router} from "@angular/router";
import {DataserviceService} from "../../services/dataservice.service";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  createCatForm: FormGroup;
  category: Category[];

  constructor(private fb: FormBuilder,
              private forumService: ForumService,
              private router: Router,
              public metaService: Meta,
              public titleService: Title,
              private dataService: DataserviceService) {
    this.createCatForm = this.fb.group({
      catName: ['', Validators.required],
      catDescription: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }

  postCategory(values) {
    const catData = new FormData();
    catData.append('catName', values.catName);
    catData.append('catDescription', values.catDescription);
    this.forumService.createCategories(catData).subscribe(result => {
      this.router.navigate(['forum']);
    });
  }

}
