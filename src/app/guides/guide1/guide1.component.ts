import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-guide1',
  templateUrl: './guide1.component.html',
  styleUrls: ['./guide1.component.scss']
})
export class Guide1Component implements OnInit {

  constructor(public titleService: Title, public metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("New World Invasions Multiplayer PvE Experience | Guides | New World Hub");
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }

}
