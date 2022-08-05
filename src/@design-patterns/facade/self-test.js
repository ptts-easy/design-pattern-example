console.log("***** running facade self-test.js *****");

import ShapeMaker from "./shape-maker.js";

import Run from "./facade_1.js";

export default function self_test(){

  console.log("------- start facade-test -------");

  let shapeMaker = new ShapeMaker();

  shapeMaker.drawCircle();
  shapeMaker.drawRectangle();
  shapeMaker.drawSquare();  

  console.log("------- end facade-test -------");

  Run();
}
