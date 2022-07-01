console.log("running cache.js");

import ServiceInterface from "./service-interface.js";

import CollectionInterface from "../collection/collection-interface.js";

class Cache extends CollectionInterface {
  addService(service)
  {
    this.updateElement(service);
  }
  getService(serviceName) {
    return this.getElement(serviceName);
  }
  printMe() {
    console.log("Called " + this.elements.size + " : Cache");

    this.elements.forEach ((value, key) => {
//      console.log("    item uid : " + key + " value : " + value.getName());
      value.printMe();
    })
  }  
}

export default Cache;