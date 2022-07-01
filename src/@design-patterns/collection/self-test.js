console.log("***** running collection self-test.js *****");

import ElementInterface from "./element-interface.js";
import ElementName from "./element-name.js";

import CollectionInterface from "./collection-interface.js";
import CollectionName from "./collection-name.js";

export default function self_test(){

  //test Elements

  let myItemI = new ElementInterface(1, "myItemI");
  myItemI.printMe();

  let myItemName = new ElementName(2, "name-2", "myItemName");
  myItemName.printMe();

  //test Collections

  let myCollectionI = new CollectionInterface();

  myCollectionI.updateElement(new ElementInterface(1, "myItem01"));
  myCollectionI.updateElement(new ElementInterface(2, "myItem02"));
  myCollectionI.updateElement(new ElementInterface(3, "myItem03"));
  myCollectionI.updateElement(new ElementInterface(4, "myItem04"));
  myCollectionI.printMe();

  let myCollectionName = new CollectionName();

  myCollectionName.updateElement(new ElementName(1, "name-1", "myItem01"));
  myCollectionName.updateElement(new ElementName(2, "name-2", "myItem02"));
  myCollectionName.updateElement(new ElementName(3, "name-3", "myItem03"));
  myCollectionName.updateElement(new ElementName(4, "name-4", "myItem04"));
  myCollectionName.printMe();
}
