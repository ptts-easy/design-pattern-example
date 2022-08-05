console.log("***** running strategy self-test.js *****");

import Context from "./context.js";
import OperationAdd from "./operation-add.js";
import OperationSubstract from "./operation-substract.js";
import OperationMultiply from "./operation-multiply.js";

import Run from "./strategy_1.js";

export default function self_test(){

  console.log("------- start strategy-test -------");
  
  let context = new Context(new OperationAdd());    
  console.log("10 + 5 = " + context.executeStrategy(10, 5));

  context = new Context(new OperationSubstract());    
  console.log("10 - 5 = " + context.executeStrategy(10, 5));

  context = new Context(new OperationMultiply());   
  console.log("10 * 5 = " + context.executeStrategy(10, 5));

  console.log("------- end strategy-test -------");

  Run();
}