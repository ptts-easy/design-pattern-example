import Circle from "./circle.js";

class ShapeFactory {
  static circleMap = new Map();

  static getCircle(color) {
    let circle = ShapeFactory.circleMap.get(color);

    if (circle == undefined) {
      circle = new Circle(color);
      ShapeFactory.circleMap.set(color, circle);
      console.log("Creating circle of color : " + color);
    }

    return circle;
  }
}

export default ShapeFactory;