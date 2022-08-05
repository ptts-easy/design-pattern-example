import Shape from "./shape.js";

class Circle extends Shape {
  constructor(color) {
    super();
    this.color = color;
    this.x = 0;
    this.y = 0;
    this.radius = 0;
  }
  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }
  setRadius(radius) {
    this.radius = radius;
  }
  draw() {
    console.log("Circle: Draw() [Color : " + this.color + ", x : " + this.x + ", y :" + this.y + ", radius :" + this.radius);
  }
}

export default Circle;