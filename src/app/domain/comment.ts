export default class Comment {
  public id;
  public user;
  public url;
  public body;
  public updatedAt;
  public createdAt;

  constructor() {}

  public toJson() {
    return JSON.stringify(this);
  }
}
