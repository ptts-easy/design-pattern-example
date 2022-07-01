console.log("running factory-a.js");

import ClassAA from "./class-aa.js";
import ClassAB from "./class-ab.js";
import ClassNull from "./class-null.js";

import FactoryInterface from "./factory-interface.js";

class FactoryA extends FactoryInterface {
  createInstance(instance_type, instance_name) {
    console.log("Called " + instance_type + " : " + instance_name + " : FactoryA");

    if (instance_type == "class-aa") {
      return new ClassAA(instance_name);
    } else if (instance_type == "class-ab") {
      return new ClassAB(instance_name);
    } else {
      return new ClassNull(instance_name);
    }
  }
}

export default FactoryA;