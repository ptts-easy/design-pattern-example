console.log("running element-interface.js");

class ElementInterface {
  constructor(uid, instancename) {
    this.uid = uid;
    this.instancename = instancename;
  }
  getUid() {
    return this.uid;
  }
  printMe() {
    console.log("Called " + this.instancename + " : ElementInterface" + " (uid : " + this.uid + ")");
  }
}

export default ElementInterface;

