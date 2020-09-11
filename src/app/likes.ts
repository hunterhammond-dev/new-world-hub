export class Likes {
  public userid: number;
  public post_type: string;
  public post_id: number;

  constructor(userid: number, post_type: string, post_id: number,) {
    this.userid = userid;
    this.post_type = post_type;
    this.post_id = post_id;
  }
}
