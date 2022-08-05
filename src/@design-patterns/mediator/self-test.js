console.log("***** running mediator self-test.js *****");

import User from "./user.js";

import Run from "./mediator_1.js";

export default function self_test(){

  console.log("------- start mediator-test -------");

  let robert = new User("Robert");
  let john = new User("John");

  robert.sendMessage("Hi! John!");
  john.sendMessage("Hello! Robert!");

  console.log("------- end mediator-test -------");

  Run();
}