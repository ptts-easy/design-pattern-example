console.log("running class-ba.js");

import ClassInterface from "./class-interface.js";

class ClassBA extends ClassInterface {
  constructor(instancename) {
    super(instancename);
  }
  print_me() {
    console.log("Called " + this.instancename + " : ClassBA");
  }
}

export default ClassBA;