console.log("***** running factory self-test.js *****");

import ClassInterface from "./class-interface.js";
import ClassAA from "./class-aa.js";
import ClassAB from "./class-ab.js";
import ClassBA from "./class-ba.js";
import ClassBB from "./class-bb.js";
import ClassNull from "./class-null.js";

import FactoryInterface from "./factory-interface.js";
import FactoryA from "./factory-a.js";
import FactoryB from "./factory-b.js";

export default function self_test(){

  //test Classes

  let myClassI = new ClassInterface("myClassI");
  myClassI.print_me();

  let myClassAA = new ClassAA("myClassAA");
  myClassAA.print_me();

  let myClassAB = new ClassAB("myClassAB");
  myClassAB.print_me();

  let myClassBA = new ClassBA("myClassBA");
  myClassBA.print_me();

  let myClassBB = new ClassBB("myClassBB");
  myClassBB.print_me();

  let myClassNull = new ClassNull("myClassNull");
  myClassNull.print_me();

  //test Factories

  let myFactoryI = new FactoryInterface();

  let myClassFI = myFactoryI.create_instance("class-interface", "myClassFI");
  myClassFI.print_me();

  let myFactoryA = new FactoryA();

  let myClassFAA = myFactoryA.create_instance("class-aa", "myClassFAA");
  myClassFAA.print_me();

  let myClassFAB = myFactoryA.create_instance("class-ab", "myClassFAB");
  myClassFAB.print_me();

  let myFactoryB = new FactoryB();

  let myClassFBA = myFactoryB.create_instance("class-ba", "myClassFBA");
  myClassFBA.print_me();

  let myClassFBB = myFactoryB.create_instance("class-bb", "myClassFBB");
  myClassFBB.print_me();

  let myClassFNull = myFactoryB.create_instance("class-c", "myClassFNull");
  myClassFNull.print_me();
}
