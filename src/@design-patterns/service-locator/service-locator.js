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
  static getInstance(instancename){
    if (Singleton.instance == undefined) {
      Singleton.instance = new ServiceLocator("private");

      console.log("Created Singleton Instance");
    }

    Singleton.instance.instancename = instancename;

    return Singleton.instance;
  }
  static getService(serviceName) {
    let serviceLocator = ServiceLocator.getInstance("serviceLocator");

    let service = serviceLocator.cache.getService(serviceName);

    if (service != undefined) {
       return service;
    }

    service = serviceLocator.context.lookup(serviceName);
    serviceLocator.cache.addService(service);

    //typeof service === 'object'
    //service instanceof ServiceNull === true

    return service;
  }
}

export default ServiceLocator;