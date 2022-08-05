import Expression from "./expression.js";

class OrExpression extends Expression {
  constructor(expr1, expr2) {
    super();
    this.expr1 = expr1;
    this.expr2 = expr2;
  }
  interpret(context) {
    return this.expr1.interpret(context) || this.expr2.interpret(context);
  }
}

export default OrExpression;