import Shape from "./shape.js";

class Circle extends Shape {
  constructor(x, y, radius, drawAPI) {
    super(drawAPI);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw() {
    this.drawAPI.drawCircle(this.radius, this.x, this.y);
  }
}

export default Circle;