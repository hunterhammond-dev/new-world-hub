import { Component, OnInit } from '@angular/core';
import {Topics} from "../../topics";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ForumService} from "../../services/forum.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataserviceService} from "../../services/dataservice.service";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-update-topic',
  templateUrl: './update-topic.component.html',
  styleUrls: ['./update-topic.component.scss']
})
export class UpdateTopicComponent implements OnInit {
  updateTopicForm: FormGroup;
  topicId: any;
  topics: Topics[];
  subject: string;
  content: string;

  constructor(private fb: FormBuilder,
              private forumService: ForumService,
              private router: Router,
              public metaService: Meta,
              public titleService: Title,
              private dataService: DataserviceService,
              private actRoute: ActivatedRoute) {
    this.updateTopicForm = this.fb.group({
      topicSubject: ['', Validators.required],
      topicContent: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.forumService.getTopic().subscribe((topics: Topics[]) => {
      this.topics = topics;
      this.subject = this.topics[0].topicSubject;
      this.content = this.topics[0].topicContent;
    });
    this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
    this.metaService.updateTag({ name: 'description', content: 'Your guide to everything New World Guides, Forum, Skill Tracker, Company Database, and items. With a recently added skill calculator for build and weapons.'});
  }

  putTopic(values) {
    const topicData = new FormData();
    topicData.append('topicSubject', values.topicSubject);
    topicData.append('topicContent', values.topicContent);
    topicData.append('topicId', this.forumService.getPostToken());
    this.forumService.updateTopic(topicData).subscribe(result => {
      this.router.navigate(['forum/' + this.topics[0].topicCat + '/' + this.topics[0].topicId]);
    });
  }

}
