class Shape {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text
    this.textColor = textColor
  }

  setColor(color) {
    this.color =(color);
  }
}

class Triangle extends Shape {
  constructor(color, text, textColor) {
super(color, text, textColor)
  }
  
render() {
  return `<polygon points="100 0, 0 ,0 50, 100" fill="${this.color}"/>`;
}
}
class Circle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor)
      }
render() {
  return `<circle width="300" height="200" fill="${this.color}"/>`;
}
}

class Square extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor)
      }
   
  render() {
    return `<rect width="300" height="200" fill="${this.color}"/> `;
  }
}

 module.exports = {Triangle, Circle, Square};
