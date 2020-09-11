import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ForumService} from '../../services/forum.service';
import { DataserviceService } from "../../services/dataservice.service";
import { Topics } from '../../topics';
import { Likes} from "../../likes";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FormGroup } from "@angular/forms";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  form: FormGroup;

  isUser = 0;

  topics: Topics[];
  likes: Likes[];

  arrowUp = faArrowUp;
  arrowDown = faArrowDown;

  Math: Math = Math;

  p: number = 1;
  collection: any[] = this.topics;

  constructor(public forumService: ForumService,
              public dataService: DataserviceService,
              public metaService: Meta,
              public titleService: Title) {
  }

  ngOnInit() {
    this.forumService.getTopics().subscribe((topics: Topics[]) => {
      this.topics = topics;
    });
    this.titleService.setTitle("Forum | New World Hub");
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
