console.log("running service-null.js");

import ServiceInterface from "./service-interface.js";

class ServiceNull extends ServiceInterface {
  constructor(uid, instancename) {
    super(uid, instancename);
  }
  execute() {
    console.log("Called " + this.getServiceName() + " : ServiceNull");
  }
  printMe() {
    console.log("Called " + this.getServiceName() + " : ServiceNull" + " ()");
  }
}

export default ServiceNull;