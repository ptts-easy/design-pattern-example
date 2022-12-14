console.log("***** running singleton self-test.js *****");

import Singleton from "./singleton.js";

import SingleObject from "./single-object.js";

import Run from "./singleton_1.js";

export default function self_test(){

  console.log("------- start singleton-test -------");

  let myInstance1 = Singleton.getInstance("myInstance1");
  myInstance1.printMe();

  let myInstance2 = Singleton.getInstance("myInstance2");
  myInstance2.printMe();

  let myInstance3 = Singleton.getInstance("myInstance3");
  myInstance3.printMe();

  myInstance1.printMe();
  myInstance2.printMe();

  let myInstance4 = new Singleton("myInstance4");

  myInstance4.printMe();

  console.log("------- end singleton-test -------");

  console.log("------- start singleton-test -------");
  let object_1 = new SingleObject();

  //Get the only object available
  let object_2 = SingleObject.getInstance();

  //show the message
  object_2.showMessage();
  console.log("------- end singleton-test -------");

  Run();
}
