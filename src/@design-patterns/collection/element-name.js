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
    return this.name;
  }
  printMe() {
    console.log("Called " + this.instancename + " : ElementName" + " (uid : " + this.uid + ", name : " + this.name + ")");
  }
}

export default ElementName;