console.log("running class-aa.js");

import ClassInterface from "./class-interface.js";

class ClassAA extends ClassInterface {
  constructor(...args) {
    super(...args);
  }
  printMe() {
    console.log("Called " + this.instancename + " : ClassAA");
  }
}

export default ClassAA;