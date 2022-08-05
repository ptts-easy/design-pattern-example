import Shape from "./shape.js";

class ShapeDecorator extends Shape {
  constructor(decoratedShape) {
    super();
    this.decoratedShape = decoratedShape;
  }
  draw() {
    this.decoratedShape.draw();
  }
}

export default ShapeDecorator;