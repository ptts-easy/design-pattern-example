import Rectangle from "./rectangle.js";
import Square from "./square.js";
import Circle from "./circle.js";

class ShapeCache {
  static shapeMap = new Map();

  static getShape(shapeId) {
    let cachedShape = ShapeCache.shapeMap.get(shapeId);
    return cachedShape.clone();
  }
  // for each shape run database query and create shape
  // shapeMap.set(shapeKey, shape);
  // for example, we are adding three shapes
  static loadCache() {
    let circle = new Circle();
    circle.setId("1");
    ShapeCache.shapeMap.set(circle.getId(),circle);

    let square = new Square();
    square.setId("2");
    ShapeCache.shapeMap.set(square.getId(),square);

    let rectangle = new Rectangle();
    rectangle.setId("3");
    ShapeCache.shapeMap.set(rectangle.getId(), rectangle);
  }
}

export default ShapeCache;