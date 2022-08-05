import Strategy from "./strategy.js";

class OperationSubstract extends Strategy {
  doOperation(num1, num2) {
    return num1 - num2;
  }
}

export default OperationSubstract;