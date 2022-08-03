console.log("running service-locator.js");

import InitialContext from "./initial-context.js";
import Cache from "./cache.js";

class ServiceLocator {
  static instance;

  constructor(instancename) {
    if (ServiceLocator.instance != undefined) {
      console.log("Error : can not create Singleton class with " + instancename);
//      throw "Error : can not create ServiceLocator class !";
    }
    this.instancename = instancename;

    this.cache = new Cache();
    this.context = new InitialContext();
  }

  static getInstance(instancename){

    console.log("ServiceLocator::getInstance");

    if (ServiceLocator.instance == undefined) {
      ServiceLocator.instance = new ServiceLocator("private");

      console.log("Created Singleton Instance");
    }

    ServiceLocator.instance.instancename = instancename;

    return ServiceLocator.instance;
  }

  static getService(serviceName) {
    let serviceLocator = ServiceLocator.getInstance("serviceLocator");

    console.log(serviceLocator.context);

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