export default class Label {
  public name;
  public color;
  public url;

  constructor() {}

  public toJson() {
    return JSON.stringify(this);
  }
}
