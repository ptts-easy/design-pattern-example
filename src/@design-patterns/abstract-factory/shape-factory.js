import Rectangle from "./rectangle.js";
import Square from "./square.js";

import AbstractFactory from "./abstract-factory.js";

class ShapeFactory extends AbstractFactory {
  getShape(shapeType) {
    if (shapeType == "RECTANGLE") {
      return new Rectangle();
    } else if (shapeType == "SQUARE") {
      return new Square();
    } else {
      return null;
    }
  }
}

export default ShapeFactory;