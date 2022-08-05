import Expression from "./expression.js";

class TerminalExpression extends Expression {
  constructor(data) {
    super();
    this.data = data;
  }
  interpret(context) {
    if(context.includes(this.data)){
      return true;
    }
    return false;
  }
}

export default TerminalExpression;