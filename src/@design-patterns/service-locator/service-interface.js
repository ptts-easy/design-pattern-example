console.log("running service-interface.js");

import ElementInterface from "../collection/element-interface.js";

class ServiceInterface extends ElementInterface {
  constructor(uid, instancename) {
    super(uid, instancename);
  }
  getServiceName() {
    return this.uid;
  }
  execute()
  {
    console.log("Called " + this.getServiceName() + " : ServiceInterface");
  }
  printMe() {
    console.log("Called " + this.getServiceName() + " : ServiceInterface" + " (uid : " + this.uid + ")");
  }
}

export default ServiceInterface;

