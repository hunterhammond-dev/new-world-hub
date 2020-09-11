import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';
import { Category } from '../category';
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { DataserviceService } from "../services/dataservice.service";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  faComments = faComments;

  admin = '1';

  categories: Category[];
  catId: number;

  constructor(public forumService: ForumService, public titleService: Title, public metaService: Meta, public dataService: DataserviceService) { }

  ngOnInit() {
    this.forumService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
    this.titleService.setTitle("Forum | New World Hub");
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }
}
