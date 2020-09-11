export class Assignment {
  public companyAssignmentId: string;
  public companyId: number;
  public uid: number;
  public username: string;

  constructor(companyAssignmentId: string, companyId: number, uid: number, username: string) {
    this.companyAssignmentId = companyAssignmentId;
    this.companyId = companyId;
    this.uid = uid;
    this.username = username;
  }
}
