export class Points {
  public userGaveBy: number;
  public pointId: string;
  public userReceive: number;

  constructor(userGaveBy: number, pointId: string, userReceive: number,) {
    this.userGaveBy = userGaveBy;
    this.pointId = pointId;
    this.userReceive = userReceive;
  }
}
