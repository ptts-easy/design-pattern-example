console.log("running service-locator.js");

import Singleton from "../singleton/singleton.js";

import InitialContext from "./initial-context.js";
import Cache from "./cache.js";

class ServiceLocator extends Singleton {
  constructor(instancename) {
    super(instancename);

    this.cache = new Cache();
    this.context = new InitialContext();
  }

  static getService(serviceName) {
    let serviceLocator = ServiceLocator.getInstance("serviceLocator");

    let service = serviceLocator.cache.getService(serviceName);

    if (service != null) {
       return service;
    }

    service = serviceLocator.context.lookup(serviceName);
    serviceLocator.cache.addService(service);

    return service;
  }
}

export default ServiceLocator;