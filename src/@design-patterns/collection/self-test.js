console.log("***** running collection self-test.js *****");

import ElementInterface from "./element-interface.js";
import ElementName from "./element-name.js";
import ElementNull from "./element-null.js";

import CollectionInterface from "./collection-interface.js";
//import CollectionName from "./collection-name.js";

export default function self_test(){

  //test Elements

  let myItemI = new ElementInterface(1, "myItemI");
  myItemI.print_me();

  let myItemName = new ElementName(2, "2", "myItemName");
  myItemName.print_me();

  let myItemNull = new ElementNull(3, "myItemNull");
  myItemNull.print_me();

  //test Collections

  let myCollectionI = new CollectionInterface();

  myCollectionI.updateElement(new ElementInterface(1, "myItem01"));
  myCollectionI.updateElement(new ElementInterface(2, "myItem02"));
  myCollectionI.updateElement(new ElementInterface(3, "myItem03"));
  myCollectionI.updateElement(new ElementInterface(4, "myItem04"));
  myCollectionI.print_me();
/*
  let myFactoryA = new FactoryA();

  let myClassFAA = myFactoryA.create_instance("class-aa", "myClassFAA");
  myClassFAA.print_me();

  let myClassFAB = myFactoryA.create_instance("class-ab", "myClassFAB");
  myClassFAB.print_me();
//
  let myFactoryB = new FactoryB();

  let myClassFBA = myFactoryB.create_instance("class-ba", "myClassFBA");
  myClassFBA.print_me();

  let myClassFBB = myFactoryB.create_instance("class-bb", "myClassFBB");
  myClassFBB.print_me();

  let myClassFNull = myFactoryB.create_instance("class-c", "myClassFNull");
  myClassFNull.print_me();
*/  
}
