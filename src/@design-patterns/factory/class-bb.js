console.log("running class-bb.js");

import ClassInterface from "./class-interface.js";

class ClassBB extends ClassInterface {
  constructor(instancename) {
    super(instancename);
  }
  print_me() {
    console.log("Called " + this.instancename + " : ClassBB");
  }
}

export default ClassBB;