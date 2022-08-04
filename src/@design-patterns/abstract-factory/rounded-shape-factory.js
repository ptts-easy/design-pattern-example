import RoundedRectangle from "./rounded-rectangle.js";
import RoundedSquare from "./rounded-square.js";

import AbstractFactory from "./abstract-factory.js";

class RoundedShapeFactory extends AbstractFactory {
  getShape(shapeType) {
    if (shapeType == "RECTANGLE") {
      return new RoundedRectangle();
    } else if (shapeType == "SQUARE") {
      return new RoundedSquare();
    } else {
      return null;
    }
  }
}

export default RoundedShapeFactory;