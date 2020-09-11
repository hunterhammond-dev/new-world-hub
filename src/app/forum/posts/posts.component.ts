import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../services/forum.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from '../../posts';
import {Topics} from '../../topics';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataserviceService} from '../../services/dataservice.service';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import {Likes} from "../../likes";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Posts[];
  topics: Topics[];
  likes: Likes[];
  createPostForm: FormGroup;

  admin = '0';

  faTrash = faTrash;
  arrowUp = faArrowUp;
  arrowDown = faArrowDown;
  faEdit = faEdit;

  Math: Math = Math;

  p: number = 1;
  collection: any[] = this.posts;

  constructor(private fb: FormBuilder,
              public forumService: ForumService,
              public dataService: DataserviceService,
              private router: Router,
              private actRoute: ActivatedRoute,
              public metaService: Meta,
              public titleService: Title) {
    this.createPostForm = this.fb.group( {
      postContent: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.forumService.getTopic().subscribe((topics: Topics[]) => {
      this.topics = topics;
      this.titleService.setTitle(this.topics[0].topicSubject + " | New World Hub Forum");
      this.metaService.updateTag({name: 'keywords', content: 'New World, New World MMO, MMO, MMORPG, New World Guides, guides, how to, new world game, new world video game, amazon'});
      this.metaService.updateTag({ name: 'description', content: this.topics[0].topicContent});
    });
    this.forumService.getPosts().subscribe((posts: Posts[]) => {
      this.posts = posts;
    });
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

  postComment(values) {
    const postData = new FormData();
    postData.append('postContent', values.postContent);
    postData.append('postTopic', (this.topics[0].topicId).toString());
    postData.append('postBy', (this.dataService.getToken()));
    this.forumService.createPosts(postData).subscribe(result => {
      this.ngOnInit();
    });
  }

  deleteTopic() {
    this.forumService.removeTopic(this.forumService.getPostToken()). subscribe(result => {
      this.forumService.getNavigation('forum/', this.forumService.getTopicToken());
    });
  }

  deletePost() {
    this.forumService.removePost(this.forumService.getComToken()). subscribe(result => {
      this.ngOnInit();
    });
  }
}
