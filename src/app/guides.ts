export class Guides {
  public guideId: number;
  public guideSubject: string;
  public guideDate: Date;
  public guideBy: number;
  public guideContent: string;
  public guideDesc: string;
  public image: string;
  public dateDiff: number;
  public name: string;
  public profilePicture: string;

  constructor(guideId: number,
              guideSubject: string,
              guideDate: Date,
              guideBy: number,
              guideContent: string,
              image: string,
              name: string,
              profilePicture: string,
              guideDesc: string,
              dateDiff: number) {
    this.guideId = guideId;
    this.guideSubject = guideSubject;
    this.guideDate = guideDate;
    this.guideBy = guideBy;
    this.guideContent = guideContent;
    this.image = image;
    this.name = name;
    this.profilePicture = profilePicture;
    this.guideDesc = guideDesc;
    this.dateDiff = dateDiff;
  }
}
