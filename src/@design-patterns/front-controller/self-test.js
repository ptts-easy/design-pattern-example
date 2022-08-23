console.log("***** running front-controller self-test.js *****");

import FrontController from "./front-controller.js";

export default function self_test() {

  console.log("------- start front-controller-test -------");
  
  let frontController = new FrontController();
  frontController.dispatchRequest("HOME");
  frontController.dispatchRequest("STUDENT");

  console.log("------- end front-controller-test -------");
}