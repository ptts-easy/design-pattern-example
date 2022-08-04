import Shape from "./shape.js";

class RoundedRectangle extends Shape {
  constructor() {
    super();
  }
  draw() {
    console.log("Inside RoundedRectangle::draw() method.");
  }
}

export default RoundedRectangle;