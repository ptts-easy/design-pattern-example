import Service from "./service.js";

class Service1 extends Service {
  execute() {
    console.log("Executing Service1");
  }
  getName() {
    return "Service1";
  }
}

export default Service1;