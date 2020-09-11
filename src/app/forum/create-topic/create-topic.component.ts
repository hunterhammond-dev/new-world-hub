import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForumService } from '../../services/forum.service';
import { Router } from '@angular/router';
import { Topics } from '../../topics';
import { DataserviceService } from '../../services/dataservice.service';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {
  createTopicForm: FormGroup;
  topics: Topics[];

  constructor(private fb: FormBuilder,
              private forumService: ForumService,
              private router: Router,
              public metaService: Meta,
              public titleService: Title,
              private dataService: DataserviceService) {
    this.createTopicForm = this.fb.group({
      topicSubject: ['', Validators.required],
      topicContent: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.forumService.getTopics().subscribe((topics: Topics[]) => {
      this.topics = topics;
    });
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }

  postTopic(values) {
    const topicData = new FormData();
    topicData.append('topicSubject', values.topicSubject);
    topicData.append('topicCat', (this.forumService.getTopicToken()));
    topicData.append('topicContent', values.topicContent);
    topicData.append('topicBy', this.dataService.getToken());
    this.forumService.createTopics(topicData).subscribe(result => {
      this.router.navigate(['forum/' + this.forumService.getTopicToken()]);
    });
  }
}
