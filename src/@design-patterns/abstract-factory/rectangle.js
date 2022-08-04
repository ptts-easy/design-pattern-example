import Shape from "./shape.js";

class Rectangle extends Shape {
  constructor() {
    super();
  }
  draw() {
    console.log("Inside Rectangle::draw() method.");
  }
}

export default Rectangle;