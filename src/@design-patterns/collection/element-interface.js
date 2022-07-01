console.log("running element-interface.js");

class ElementInterface {
  constructor(uid, instancename) {
    this.uid = uid;
    this.instancename = instancename;
  }
  getUid() {
    return this.uid;
  }
  print_me() {
    console.log("Called " + this.instancename + " : ElementInterface");
  }
}

export default ElementInterface;

