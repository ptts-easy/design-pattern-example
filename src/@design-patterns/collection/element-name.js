console.log("running element-name.js");

import ElementInterface from "./element-interface.js";

class ElementName extends ElementInterface {
  constructor(uid, name, instancename) {
    super(uid, instancename);
    this.name = name;
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    this.name;
  }
  print_me() {
    console.log("Called " + this.instancename + " : ElementName");
  }
}

export default ElementName;