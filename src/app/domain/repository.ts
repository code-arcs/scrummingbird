export default class Repository {
  public id;
  public name;
  public fullName;
  public url;

  constructor() {}

  public toJson() {
    return JSON.stringify(this);
  }
}
