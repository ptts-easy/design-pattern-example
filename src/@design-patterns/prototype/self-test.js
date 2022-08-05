console.log("***** running prototype self-test.js *****");

import ShapeCache from "./shape-cache.js";

import Run from "./prototype_1.js";

export default function self_test(){

  console.log("------- start prototype-test -------");

  ShapeCache.loadCache();

  let clonedShape = ShapeCache.getShape("1");
  console.log(clonedShape);
  console.log("Shape : " + clonedShape.getType());   

  let clonedShape2 = ShapeCache.getShape("2");
  console.log("Shape : " + clonedShape2.getType());    

  let clonedShape3 = ShapeCache.getShape("3");
  console.log("Shape : " + clonedShape3.getType());  

  console.log("------- end prototype-test -------");

  Run();
}
