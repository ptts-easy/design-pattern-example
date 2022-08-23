import Service from "./service.js";

class Service2 extends Service {
  execute() {
    console.log("Executing Service1");
  }
  getName() {
    return "Service2";
  }
}

export default Service2;