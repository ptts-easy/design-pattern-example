import Shape from "./shape.js";

class Circle extends Shape {
  constructor() {
    super();
    this.type = "Circle";
  }
  draw() {
    console.log("Inside Circle::draw() method.");
  }
}

export default Circle;