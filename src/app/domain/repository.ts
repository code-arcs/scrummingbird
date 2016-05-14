export default class Repository {
  public id;
  public name;
  public fullName;
  public url;
  public ownerId;

  constructor() {}

  public toJson() {
    return JSON.stringify(this);
  }
}
