console.log("***** running service-locator self-test.js *****");

import ServiceInterface from "./service-interface.js";

import ServiceLocator from "./service-locator.js";

export default function self_test(){

  //test Service Locator

  let myService = ServiceLocator.getService("ServiceA");

  myService.execute();

  myService = ServiceLocator.getService("ServiceB");

  myService.execute();

  myService = ServiceLocator.getService("ServiceC");

  myService.execute();
}
