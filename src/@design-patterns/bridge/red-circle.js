import DrawAPI from "./draw-api.js";

class RedCircle extends DrawAPI {
  drawCircle(radius, x, y) {
    console.log("Drawing Circle[ color: red, radius: " + radius + ", x: " + x + ", " + y + "]");
  }
}

export default RedCircle;