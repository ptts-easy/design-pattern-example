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
import FactoryProducer from "./factory-producer.js";

import FactoryProducer_1 from "./factory-producer_1.js";

import Run from "./abstract-factory_1.js";

export default function self_test(){

  console.log("------- start factory-test -------");

  //test Classes

  let myClassI = new ClassInterface("myClassI");
  myClassI.printMe();

  let myClassAA = new ClassAA("myClassAA");
  myClassAA.printMe();

  let myClassAB = new ClassAB("myClassAB");
  myClassAB.printMe();

  let myClassBA = new ClassBA("myClassBA");
  myClassBA.printMe();

  let myClassBB = new ClassBB("myClassBB");
  myClassBB.printMe();

  let myClassNull = new ClassNull("myClassNull");
  myClassNull.printMe();

  //test Factories

  let myFactoryI = new FactoryInterface();

  let myClassFI = myFactoryI.createInstance("class-interface", "myClassFI");
  myClassFI.printMe();

  let myFactoryA = new FactoryA();

  let myClassFAA = myFactoryA.createInstance("class-aa", "myClassFAA");
  myClassFAA.printMe();

  let myClassFAB = myFactoryA.createInstance("class-ab", "myClassFAB");
  myClassFAB.printMe();

  let myFactoryB = new FactoryB();

  let myClassFBA = myFactoryB.createInstance("class-ba", "myClassFBA");
  myClassFBA.printMe();

  let myClassFBB = myFactoryB.createInstance("class-bb", "myClassFBB");
  myClassFBB.printMe();

  //test FactoryProducer

  let myFactoryProducer = new FactoryProducer();

  let myFactoryPA =  myFactoryProducer.getFactory("factory-a", "myFactoryPA");
  let myClassPAA = myFactoryPA.createInstance("class-aa", "myClassPAA");
  myClassPAA.printMe();

  let myFactoryPB =  myFactoryProducer.getFactory("factory-b", "myFactoryPB");
  let myClassPBA = myFactoryPB.createInstance("class-ba", "myClassPBA");
  myClassPBA.printMe();

  let myFactoryPC =  myFactoryProducer.getFactory("factory-c", "myFactoryPC");
  let myClassPC = myFactoryPC.createInstance("class-c", "myClassPC");
  myClassPC.printMe();

  console.log("------- end factory-test -------");
 
  console.log("------- start factory-test -------");
 
  //get shape factory
  let shapeFactory = FactoryProducer_1.getFactory(false);
  //get an object of Shape Rectangle
  let shape1 = shapeFactory.getShape("RECTANGLE");
  //call draw method of Shape Rectangle
  shape1.draw();
  //get an object of Shape Square 
  let shape2 = shapeFactory.getShape("SQUARE");
  //call draw method of Shape Square
  shape2.draw();
  //get shape factory
  let shapeFactory1 = FactoryProducer_1.getFactory(true);
  //get an object of Shape Rectangle
  let shape3 = shapeFactory1.getShape("RECTANGLE");
  //call draw method of Shape Rectangle
  shape3.draw();
  //get an object of Shape Square 
  let shape4 = shapeFactory1.getShape("SQUARE");
  //call draw method of Shape Square
  shape4.draw();

  console.log("------- end factory-test -------");

  Run();
}
