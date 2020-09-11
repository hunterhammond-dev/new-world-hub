export class Topics {
  public topicId: number;
  public topicSubject: string;
  public topicDate: Date;
  public topicCat: number;
  public topicBy: number;
  public topicContent: string;
  public dateDiff: number;
  public likes: number;
  public name: string;
  public profilePicture: string;
  public points: number;

  constructor(topicId: number,
              topicSubject: string,
              topicDate: Date,
              topicCat: number,
              topicBy: number,
              topicContent: string,
              dateDiff: number,
              name: string,
              profilePicture: string,
              likes: number,
              points: number) {
    this.topicId = topicId;
    this.topicSubject = topicSubject;
    this.topicDate = topicDate;
    this.topicCat = topicCat;
    this.topicBy = topicBy;
    this.topicContent = topicContent;
    this.dateDiff = dateDiff;
    this.likes = likes;
    this.name = name;
    this.profilePicture = profilePicture;
    this.points = points;
  }
}
