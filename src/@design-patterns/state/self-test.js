console.log("***** running state self-test.js *****");

import Context from "./context.js";
import StartState from "./start-state.js";
import StopState from "./stop-state.js";

import Run from "./state_1.js";

export default function self_test(){

  console.log("------- start state-test -------");
  
  let context = new Context();

  let startState = new StartState();
  startState.doAction(context);

  console.log(context.getState().toString());

  let stopState = new StopState();
  stopState.doAction(context);

  console.log(context.getState().toString());

  console.log("------- end state-test -------");

  Run();
}