console.log("running factory-b.js");

import ClassBA from "./class-ba.js";
import ClassBB from "./class-bb.js";
import ClassNull from "./class-null.js";

import FactoryInterface from "./factory-interface.js";

class FactoryB extends FactoryInterface {
  create_instance(instance_type, instance_name) {
    console.log("Called " + instance_type + " : FactoryB");

    if(instance_type == "class-ba") {
      return new ClassBA(instance_name);
    } else if (instance_type == "class-bb") {
      return new ClassBB(instance_name);
    } else {
      return new ClassNull(instance_name);
    }
  }
}

export default FactoryB;