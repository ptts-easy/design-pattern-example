console.log("running class-bb.js");

import ClassInterface from "./class-interface.js";

class ClassBB extends ClassInterface {
  constructor(...args) {
    super(...args);
  }
  printMe() {
    console.log("Called " + this.instancename + " : ClassBB");
  }
}

export default ClassBB;