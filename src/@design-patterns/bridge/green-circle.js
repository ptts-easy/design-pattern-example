import DrawAPI from "./draw-api.js";

class GreenCircle extends DrawAPI {
  drawCircle(radius, x, y) {
    console.log("Drawing Circle[ color: green, radius: " + radius + ", x: " + x + ", " + y + "]");
  }
}

export default GreenCircle;