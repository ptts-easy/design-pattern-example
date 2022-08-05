import Strategy from "./strategy.js";

class OperationMultiply extends Strategy {
  doOperation(num1, num2) {
    return num1 * num2;
  }
}

export default OperationMultiply;