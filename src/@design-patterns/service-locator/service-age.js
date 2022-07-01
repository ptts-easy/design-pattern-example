console.log("running service-age.js");

import ServiceInterface from "./service-interface.js";

class ServiceAge extends ServiceInterface {
  constructor(uid, age, instancename) {
    super(uid, instancename);
    this.age = age;
  }
  setAge(age) {
    this.age = age;
  }
  getAge() {
    return this.age;
  }
  execute() {
    console.log("Called " + this.getServiceName() + " : ServiceAge" + " (age : " + this.age + ")");
  }
  printMe() {
    console.log("Called " + this.getServiceName() + " : ServiceAge" + " (uid : " + this.uid + ", age : " + this.age + ")");
  }
}

export default ServiceAge;