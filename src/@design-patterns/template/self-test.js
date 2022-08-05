console.log("***** running template self-test.js *****");

import Cricket from "./cricket.js";
import Football from "./football.js";

import Run from "./template_1.js";

export default function self_test(){

  console.log("------- start template-test -------");
  
  let game = new Cricket();
  game.play();
  console.log("");
  game = new Football();
  game.play();

  console.log("------- end template-test -------");

  Run();
}