console.log("running cache.js");

import ServiceInterface from "./service-interface.js";

import CollectionInterface from "../collection/collection-interface.js";

class Cache extends CollectionInterface {
  addService(service)
  {
    updateElement(service);
  }
  getService(serviceName) {
    return getElement(serviceName);
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