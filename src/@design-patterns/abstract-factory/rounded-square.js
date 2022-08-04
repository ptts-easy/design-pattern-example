import Shape from "./shape.js";

class RoundedSquare extends Shape {
  constructor() {
    super();
  }
  draw() {
    console.log("Inside RoundedSquare::draw() method.");
  }
}

export default RoundedSquare;