console.log("running factory-a.js");

import ClassNull from "./class-null.js";

import FactoryInterface from "./factory-interface.js";

class FactoryNull extends FactoryInterface {
  createInstance(instance_type, instance_name) {
    console.log("Called " + instance_type + " : " + instance_name + " : FactoryNull");

    return new ClassNull(instance_name);
  }
}

export default FactoryNull;