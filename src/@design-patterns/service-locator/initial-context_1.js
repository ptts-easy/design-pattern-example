import Service1 from "./service1.js";
import Service2 from "./service2.js";

class InitialContext_1 {
  lookup(jndiName) {
    if (jndiName == "Service1") {
      console.log("Looking up and creating a new Service1 object");
      return new Service1();
    } else if (jndiName == "Service2") {
      console.log("Looking up and creating a new Service2 object");
      return new Service2();
    }
    return null;
  }
}

export default InitialContext_1;