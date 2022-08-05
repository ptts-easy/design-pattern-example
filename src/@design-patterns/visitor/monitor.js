import ComputerPart from "./computer-part.js";

class Monitor extends ComputerPart {
  accept(computerPartVisitor) {
    computerPartVisitor.visit(this);
  }
}

export default Monitor;