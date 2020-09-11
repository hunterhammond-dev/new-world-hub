import { Component, OnInit } from '@angular/core';
import {GuidesService} from "../services/guides.service";
import {DataserviceService} from "../services/dataservice.service";
import {Meta, Title} from "@angular/platform-browser";
import {ForumService} from "../services/forum.service";
import {Guides} from "../guides";
import {Topics} from "../topics";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrowUp = faArrowUp;
  arrowDown = faArrowDown;

  Math: Math = Math;

  guides: Guides[];
  topics: Topics[];

  constructor(public guidesService: GuidesService,
              public dataService: DataserviceService,
              public metaService: Meta,
              public titleService: Title,
              public forumService: ForumService) { }

  ngOnInit() {
    this.guidesService.getHomeGuides().subscribe((guides: Guides[]) => {
      this.guides = guides;
    });
    this.dataService.getHomeTopics().subscribe((topics: Topics[]) => {
      this.topics = topics;
    })
    this.titleService.setTitle("New World Hub | Guides | Forum | Skills | Company Tables | News");
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }

  clickLike() {
    const likeData = new FormData();
    likeData.append('userid', this.dataService.getToken());
    likeData.append('post_type', 'topic');
    likeData.append('post_id', this.forumService.getLikeToken());
    likeData.append('id', this.dataService.getToken() + 'topic' + this.forumService.getLikeToken());
    this.forumService.addLike(likeData).subscribe(result => {
      this.ngOnInit();
    });
  }

  clickDislike() {
    this.forumService.removeLike(this.dataService.getToken() + 'topic' + this.forumService.getLikeToken()).subscribe(result => {
      this.ngOnInit();
    });
  }

  clickPoints() {
    const pointData = new FormData();
    pointData.append('userGaveBy', this.dataService.getToken());
    pointData.append('pointId', this.dataService.getToken() + this.forumService.getLikeToken() + this.forumService.getAuthorToken());
    pointData.append('userReceive', this.forumService.getAuthorToken());
    this.forumService.addPoint(pointData).subscribe(result => {
    });
  }

}
