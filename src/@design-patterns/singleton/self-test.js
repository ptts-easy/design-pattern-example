console.log("***** running singleton self-test.js *****");

import Singleton from "./singleton.js";

export default function self_test(){

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
}
