console.log("running class-null.js");

import ClassInterface from "./class-interface.js";

class ClassNull extends ClassInterface {
  constructor(...args) {
    super(...args);
  }
  print_me() {
    console.log("Called " + this.instancename + " : ClassNull");
  }
}

export default ClassNull;