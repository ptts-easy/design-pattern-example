console.log("running class-ba.js");

import ClassInterface from "./class-interface.js";

class ClassBA extends ClassInterface {
  constructor(...args) {
    super(...args);
  }
  printMe() {
    console.log("Called " + this.instancename + " : ClassBA");
  }
}

export default ClassBA;