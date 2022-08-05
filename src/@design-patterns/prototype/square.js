import Shape from "./shape.js";

class Square extends Shape {
  constructor() {
    super();
    this.type = "Square";
  }
  draw() {
    console.log("Inside Square::draw() method.");
  }
}

export default Square;