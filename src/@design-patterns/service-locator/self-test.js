console.log("***** running service-locator self-test.js *****");

import ServiceInterface from "./service-interface.js";

import ServiceLocator from "./service-locator.js";

export default function self_test(){

  console.log("------- start service-locator-test -------");

  //test Service Locator

  let myService = ServiceLocator.getService("service-name");

  myService.execute();

  myService = ServiceLocator.getService("service-age");

  myService.execute();

  myService = ServiceLocator.getService("service-unkown");

  myService.execute();

  console.log("------- end service-locator-test -------");
}
