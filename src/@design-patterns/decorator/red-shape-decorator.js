import ShapeDecorator from "./shape-decorator.js";

class RedShapeDecorator extends ShapeDecorator {
  constructor(decoratedShape) {
    super(decoratedShape);
  }
  draw() {
    this.decoratedShape.draw();
    this.setRedBorder(this.decoratedShape);
  }
  setRedBorder(decoratedShape) {
    console.log("Border Color: Red");
  }
}

export default RedShapeDecorator;