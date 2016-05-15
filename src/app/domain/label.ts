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
    this.color = this.color.toLowerCase();
    return JSON.stringify(this);
  }

  public static createLabels() {
    return [
      new Label('0d'),
      new Label('1/2d'),
      new Label('1d'),
      new Label('2d'),
      new Label('3d'),
      new Label('5d'),
      new Label('8d'),
      new Label('13d'),
      new Label('20d'),
      new Label('40d'),
      new Label('100d'),
      new Label('?'),
    ];
  }
}
