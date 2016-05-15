export default class Issue {
  public id;
  public number;
  public state;
  public title;
  public body;
  public milestone;
  public labels;
  public repository;

  constructor() {}

  public toJson() {
    return JSON.stringify(this);
  }
}
