import Circle from "./circle.js";
import Rectangle from "./rectangle.js";
import Square from "./square.js";

class ShapeMaker {
  constructor() {
    this.circle = new Circle();
    this.rectangle = new Rectangle();
    this.square = new Square();
  }
  drawCircle() {
    this.circle.draw();
  }
  drawRectangle() {
    this.rectangle.draw();
  }
  drawSquare() {
    this.square.draw();
  }
}

export default ShapeMaker;