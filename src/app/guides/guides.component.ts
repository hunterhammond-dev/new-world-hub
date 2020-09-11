import { Component, OnInit } from '@angular/core';
import {DataserviceService} from "../services/dataservice.service";
import {Guides} from "../guides";
import {Meta, Title} from "@angular/platform-browser";
import {ForumService} from "../services/forum.service";

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {

  guides: Guides[];

  constructor(public dataService: DataserviceService,
              public metaService: Meta,
              public titleService: Title,
              public forumService: ForumService) { }

  ngOnInit() {
    this.titleService.setTitle("Guides | New World Hub");
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }

}
