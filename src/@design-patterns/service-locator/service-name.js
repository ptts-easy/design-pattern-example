console.log("running service-name.js");

import ServiceInterface from "./service-interface.js";

class ServiceName extends ServiceInterface {
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
  execute() {
    console.log("Called " + this.getServiceName() + " : ServiceName" + " (name : " + this.name + ")");
  }
  printMe() {
    console.log("Called " + this.getServiceName() + " : ServiceName" + " (uid : " + this.uid + ", name : " + this.name + ")");
  }
}

export default ServiceName;