console.log("***** running iterator self-test.js *****");

import IteratorInterface from "./iterator-interface.js";
import Container from "./container.js";

import Run from "./iterator_1.js";

export default function self_test(){

  console.log("------- start iterator-test -------");

  var container = new Container();
  var iter = container.getIterator();

  for( iter.first(); iter.hasNext(); iter.next()){
    console.log(iter.value());
  } 

  console.log("------- end iterator-test -------");

  Run();
}
