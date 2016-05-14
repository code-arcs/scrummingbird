export default class Issue {
  public id;
  public number;
  public state;
  public title;
  public body;
  public milestoneId;
  public labels;

  constructor() {}

  public toJson() {
    return JSON.stringify(this);
  }
}
