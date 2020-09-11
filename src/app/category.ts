export class Category {
  public catId: number;
  public catName: string;
  public catDescription: string;

  constructor(catId: number, catName: string, catDescription: string) {
    this.catId = catId;
    this.catName = catName;
    this.catDescription = catDescription;
  }
}
