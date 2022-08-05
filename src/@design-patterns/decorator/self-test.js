console.log("***** running decorator self-test.js *****");

import Circle from "./circle.js";
import Rectangle from "./rectangle.js";
import RedShapeDecorator from "./red-shape-decorator.js";

import Run from "./decorator_1.js";

export default function self_test(){

  console.log("------- start decorator-test -------");

  let circle = new Circle();

  let redCircle = new RedShapeDecorator(new Circle());

  let redRectangle = new RedShapeDecorator(new Rectangle());
  console.log("Circle with normal border");
  circle.draw();

  console.log("\nCircle of red border");
  redCircle.draw();

  console.log("\nRectangle of red border");
  redRectangle.draw();

  console.log("------- end decorator-test -------");

  Run();
}
