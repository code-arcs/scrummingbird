export const LabelColor = '52B12D';

export default class Label {
  public color:string = LabelColor;
  public name:string;
  public url:string;

  constructor(name?:string, color?:string) {
    this.name = name;
    this.color = color || LabelColor;
  }

  public toJson() {
    return JSON.stringify(this);
  }

  public static createLabels() {
    return [
      new Label('0d'),
    ];
  }
}
