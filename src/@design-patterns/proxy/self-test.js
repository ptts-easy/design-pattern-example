console.log("***** running proxy self-test.js *****");

import ProxyImage from "./proxy-image.js";

import Run from "./proxy_1.js";

export default function self_test(){

  console.log("------- start proxy-test -------");

  let image = new ProxyImage("test_10mb.jpg");

  //image will be loaded from disk
  image.display(); 
  console.log("");

  //image will not be loaded from disk
  image.display(); 

  console.log("------- end proxy-test -------");

  Run();
}