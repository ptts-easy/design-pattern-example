import RoundedShapeFactory from "./rounded-shape-factory.js";
import ShapeFactory from "./shape-factory.js";

class FactoryProducer_1 {
  static getFactory(rounded) {
    if (rounded == true) {
      return new RoundedShapeFactory();         
    } else {
      return new ShapeFactory();
    }
  }
}

export default FactoryProducer_1;