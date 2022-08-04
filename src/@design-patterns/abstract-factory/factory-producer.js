console.log("running factory-a.js");

import FactoryA from "./factory-a.js";
import FactoryB from "./factory-b.js";
import FactoryNull from "./factory-null.js";

class FactoryProducer {
  getFactory(factory_type, factory_name) {
    console.log("Called " + factory_type + " : " + factory_name + " : FactoryProducer");

    if (factory_type == "factory-a") {
      return new FactoryA();
    } else if (factory_type == "factory-b") {
      return new FactoryB();
    } else {
      return new FactoryNull();
    }
  }
}

export default FactoryProducer;