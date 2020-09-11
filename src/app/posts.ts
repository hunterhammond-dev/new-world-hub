export class Posts {
  public postId: number;
  public postContent: string;
  public postDate: Date;
  public postTopic: number;
  public postBy: number;
  public dateDiff: number;
  public name: string;
  public likes: number;
  public topicSubject: string;
  public topicContent: string;
  public profilePicture: string;
  public points: number;

  constructor(postId: number,
              postContent: string,
              postDate: Date,
              postTopic: number,
              postBy: number,
              dateDiff: number,
              likes: number,
              name: string,
              topicSubject: string,
              profilePicture: string,
              topicContent: string,
              points: number) {
    this.postId = postId;
    this.postContent = postContent;
    this.postDate = postDate;
    this.postTopic = postTopic;
    this.postBy = postBy;
    this.dateDiff = dateDiff;
    this.likes = likes;
    this.name = name;
    this.topicSubject = topicSubject;
    this.profilePicture = profilePicture;
    this.topicContent = topicContent;
    this.points = points;
  }
}
