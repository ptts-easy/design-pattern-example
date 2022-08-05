console.log("***** running observer self-test.js *****");

import Subject from "./subject.js";

import HexaObserver from "./hexa-observer.js";
import OctalObserver from "./octal-observer.js";
import BinaryObserver from "./binary-observer.js";

import Run from "./observer_1.js";

export default function self_test(){

  console.log("------- start observer-test -------");
  
  let subject = new Subject();

  new HexaObserver(subject);
  new OctalObserver(subject);
  new BinaryObserver(subject);

  console.log("First state change: 15"); 
  subject.setState(15);
  console.log("Second state change: 10");  
  subject.setState(10);

  console.log("------- end observer-test -------");

  Run();
}