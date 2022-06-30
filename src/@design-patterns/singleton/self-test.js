console.log("***** running singleton self-test.js *****");

import Singleton from "./singleton.js";

export default function self_test(){

  let myInstance1 = Singleton.getInstance("myInstance1");
  myInstance1.print_me();

  let myInstance2 = Singleton.getInstance("myInstance2");
  myInstance2.print_me();

  let myInstance3 = Singleton.getInstance("myInstance3");
  myInstance3.print_me();

  myInstance1.print_me();
  myInstance2.print_me();
}
