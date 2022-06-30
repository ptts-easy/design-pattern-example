console.log("running class-interface.js");

class ClassInterface {
  constructor(instancename) {
    this.instancename = instancename;
  }
  print_me() {
    console.log("Called " + this.instancename + " : ClassInterface");
  }
}

export default ClassInterface;