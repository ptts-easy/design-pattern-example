console.log("***** running interpreter self-test.js *****");

import TerminalExpression from "./terminal-expression.js";
import OrExpression from "./or-expression.js";
import AndExpression from "./and-expression.js";

import Run from "./interpreter_1.js";

//Rule: Robert and John are male
function getMaleExpression() {
  let robert = new TerminalExpression("Robert");
  let john = new TerminalExpression("John");
  return new OrExpression(robert, john);    
}

//Rule: Julie is a married women
function getMarriedWomanExpression() {
  let julie = new TerminalExpression("Julie");
  let married = new TerminalExpression("Married");
  return new AndExpression(julie, married);   
}

export default function self_test(){

  console.log("------- start interpreter-test -------");

  let isMale = getMaleExpression();
  let isMarriedWoman = getMarriedWomanExpression();

  console.log("John is male? " + isMale.interpret("John"));
  console.log("Julie is a married women? " + isMarriedWoman.interpret("Married Julie"));

  console.log("------- end interpreter-test -------");

  Run();
}