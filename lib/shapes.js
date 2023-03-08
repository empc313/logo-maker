
class Shape {
  constructor(color) {
    this.color = color;
  }
  setColor() {}
}

class Triangle extends Shape {
  constructor()
  super(color)
}  
renderShape(); {
  return `<polygon points="100 0, 0 ,0 50, 100"/>`;}

class Circle extends Shape {
  constructor()
  super(color)
} 
renderShape(); {
  return `<circle cx="50" cy="50" r="50"/>`;
}

class Square extends Shape {
  constructor()
    super(color)
  } 
  renderShape(); {
    return `<rect x="10" y="10" width="30" height="30"/> `;
  }


 module.exports = {Shape, Triangle, Circle, Square};
