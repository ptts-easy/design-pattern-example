console.log("running element-null.js");

import ElementInterface from "./element-interface.js";

class ElementNull extends ElementInterface {
  constructor(uid, instancename) {
    super(uid, instancename);
  }
  print_me() {
    console.log("Called " + this.instancename + " : ElementNull");
  }
}

export default ElementNull;