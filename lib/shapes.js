class Shape {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }
}
class Circle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `<circle cx="100" cy="100" r="80" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }

  render() {
    return `<rect width="100" height="100" fill="${this.color}"/> `;
  }
}

module.exports = { Triangle, Circle, Square };
