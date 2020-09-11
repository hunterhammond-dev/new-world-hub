export class Usermodule {
  public uid: number;
  public name: string;
  public pwd: string;
  public email: string;
  public mobile: string;
  public profilePicture: string;
  public points: number;

  constructor(uid: number, name: string, pwd: string, email: string, mobile: string, profilePicture: string, points: number) {
    this.uid = uid;
    this.name = name;
    this.pwd = pwd;
    this.email = email;
    this.mobile = mobile;
    this.profilePicture = profilePicture;
    this.points = points;
  }
}
