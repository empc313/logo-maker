const Shapes = require("../shapes");
//Testing for each of the shapes
describe("Shapes", () => {
  describe("element size", () => {
    it("render a 300x200 svg element", () => {
      const generateSvg = '<svg width="300"height="200"></svg>';
      const shape = new Shape();
      shape.setSize(<svg width="300" height="200"></svg>);
      expect(shape.render()).toEqual(generateSVG);
    });
    //testing for text element
  });
  describe("text element", () => {
    const shape = new Shape();
    shape.setText();
    expect(shape.render()).toEqual();
  });
  describe("Color", () => {
    const shape = new Shape();
    shape.setColor();
    expect(shape.render()).toEqual();
  });
});

//Cannot figure out why it has started denying me permission

