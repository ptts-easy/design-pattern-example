console.log("running class-ab.js");

import ClassInterface from "./class-interface.js";

class ClassAB extends ClassInterface {
  constructor(...args) {
    super(...args);
  }
  printMe() {
    console.log("Called " + this.instancename + " : ClassAB");
  }
}

export default ClassAB;