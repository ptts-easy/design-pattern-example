console.log("running initial-context.js");

import ServiceName from "./service-name.js";
import ServiceAge from "./service-age.js";
import ServiceNull from "./service-null.js";

class InitialContext {
  lookup(serviceName){
    if (serviceName == "service-name") {
      return new ServiceName("service-name", "user-name", "private");
    } else if (serviceName == "service-age"){
      return new ServiceAge("service-age", 20, "private");
    } else {
      return new ServiceNull("service-null", "private");
    }
  }
}

export default InitialContext;