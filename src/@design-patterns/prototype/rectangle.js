import Shape from "./shape.js";

class Rectangle extends Shape {
  constructor() {
    super();
    this.type = "Rectangle";
  }
  draw() {
    console.log("Inside Rectangle::draw() method.");
  }
}

export default Rectangle;