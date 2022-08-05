console.log("***** running visitor self-test.js *****");

import Computer from "./computer.js";
import ComputerPartDisplayVisitor from "./computer-part-display-visitor.js";

import Run from "./visitor_1.js";

export default function self_test(){

  console.log("------- start visitor-test -------");
  
  let computer = new Computer();
  computer.accept(new ComputerPartDisplayVisitor());

  console.log("------- end visitor-test -------");

  Run();
}