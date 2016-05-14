export default class Milestone {
  public id;
  public number;
  public title;
  public description;
  public openIssues;
  public closedIssues;
  public state;
  public dueDate;
  constructor() {};

  public toJson() {
    return JSON.stringify(this);
  }
}
