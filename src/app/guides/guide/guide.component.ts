import { Component, OnInit } from '@angular/core';
import {Guides} from "../../guides";
import {GuidesService} from "../../services/guides.service";
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  guides: Guides[];

  constructor(public titleService: Title, public metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("New World Invasions Multiplayer PvE Experience | Guides | New World Hub");
    this.metaService.updateTag({ name: 'description', content: "With excitement increasing about the beta and full release of Amazon Game Studios Action MMORPG fans of the unreleased game are getting more and more anxious to get their hand on information about the content they can participate in."});
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
  }
}
