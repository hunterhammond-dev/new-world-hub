import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Topics } from '../topics';
import { Category } from '../category';
import { Posts } from '../posts';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  redirectUrl: string;

  baseUrl = 'https://newworldhub.com/api';

  constructor(private http: HttpClient, private router: Router) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + '/categories.php');
  }

  createCategories(data) {
    return this.http.post(this.baseUrl + '/create-category.php', data);
  }

  getTopics(): Observable<Topics[]> {
    return this.http.get<Topics[]>(this.baseUrl + '/topic-data.php?topicCat=' + (this.getTopicToken()));
  }

  getTopic(): Observable<Topics[]> {
    return this.http.get<Topics[]>(this.baseUrl + '/one-topic-data?topicId=' + (this.getPostToken()));
  }

  updateTopic(data){
    return this.http.post(this.baseUrl + '/update-topic.php', data);
  }

  createTopics(data) {
    return this.http.post(this.baseUrl + '/create-topic.php', data);
  }

  removeTopic(topicId: string) {
    return this.http.delete(`${this.baseUrl}/remove-topic.php?topicId=${topicId}`);
  }

  addLike(data) {
    return this.http.post(this.baseUrl + '/add-like.php', data);
  }

  removeLike(id: string) {
    return this.http.delete(`${this.baseUrl}/remove-like.php?id=${id}`);
  }

  addPoint(data) {
    return this.http.post(this.baseUrl + '/add-point.php', data);
  }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.baseUrl + '/post-data.php?postTopic=' + (this.getPostToken()));
  }

  createPosts(data) {
    return this.http.post(this.baseUrl + '/create-post.php', data);
  }

  removePost(postId: string) {
    return this.http.delete(`${this.baseUrl}/remove-post.php?postId=${postId}`);
  }

  updatePost(data){
    return this.http.post(this.baseUrl + '/update-post.php', data);
  }

  setTopicToken(topicToken: number) {
    localStorage.setItem('topicToken', String(topicToken));
  }

  getTopicToken() {
    return localStorage.getItem('topicToken');
  }

  setLikeToken(likeToken: number) {
    localStorage.setItem('likeToken', String(likeToken));
  }

  setComToken(comToken: number) {
    localStorage.setItem('comToken', String(comToken));
  }

  getComToken() {
    return localStorage.getItem('comToken');
  }

  getLikeToken() {
    return localStorage.getItem('likeToken');
  }

  setPostToken(postToken: number) {
    localStorage.setItem('postToken', String(postToken));
  }

  getPostToken() {
    return localStorage.getItem('postToken');
  }

  setCatToken(catToken: number) {
    localStorage.setItem('catToken', String(catToken));
  }

  getCatToken() {
    return localStorage.getItem('catToken');
  }

  setAuthorToken(authorToken: number) {
    localStorage.setItem('authorToken', String(authorToken));
  }

  getAuthorToken() {
    return localStorage.getItem('authorToken');
  }

  getNavigation(link, id) {
    if (id === '') {
      this.router.navigate([link]);
    } else {
      this.router.navigate([link + '/' + id]);
    }
  }
}
