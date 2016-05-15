export default class Issue {
  public id;
  public number;
  public state;
  public title;
  public body;
  public milestone;
  public labels;
  public repository;
  public commentCount;

  constructor() {}

  public toJson() {
    return JSON.stringify(this);
  }
}
