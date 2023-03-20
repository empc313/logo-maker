const { Circle, Square, Triangle } = require("./shapes");

//Testing for each of the shapes
describe("Shape", () => {
  describe("Circle", () => {
    it("Return as Green", () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        `<circle cx="100" cy="100" r="80" fill="green"/>`
      );
    });
  });
});
describe("Shape", () => {
  describe("Triangle", () => {
    it("Return as Blue", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`
      );
    });
  });
});

describe("Shape", () => {
  describe("Square", () => {
    it("Return as Red", () => {
      const shape = new Square();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        `<circle cx="100" cy="100" r="80" fill="red"/>`
      );
    });
  });
});
