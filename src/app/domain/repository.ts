export default class Repository {
  public id;
  public name;
  public fullName;
  public url;
  public ownerId;
  public ownerName;
  public description;
  public open_issues;

  constructor() {}

  public toJson() {
    return JSON.stringify(this);
  }
}
