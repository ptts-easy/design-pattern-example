console.log("***** running bridge self-test.js *****");

import RedCircle from "./red-circle.js";
import GreenCircle from "./green-circle.js";

import Circle from "./circle.js";

import Run from "./bridge_1.js";

export default function self_test(){

  console.log("------- start bridge-test -------");

  let redCircle = new Circle(100, 101, 10, new RedCircle());
  let greenCircle = new Circle(100, 101, 10, new GreenCircle());

  redCircle.draw();
  greenCircle.draw();

  console.log("------- end bridge-test -------");

  Run();
}
