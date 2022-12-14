console.log("running factory-interface.js");

import ClassInterface from "./class-interface.js";

class FactoryInterface {
  createInstance(instance_type, instance_name) {
    console.log("Called " + instance_type + " : FactoryInterface");
    return new ClassInterface(instance_name);
  }
}

export default FactoryInterface;