export default class Milestone {
  public id;
  public number;
  public title;
  public description;
  public openIssues;
  public closedIssues;

  constructor() {};

  public toJson() {
    return JSON.stringify(this);
  }
}
