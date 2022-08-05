
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }
  executeStrategy(num1, num2) {
    return this.strategy.doOperation(num1, num2);
  }
}

export default Context;