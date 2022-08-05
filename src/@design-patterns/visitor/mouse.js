import ComputerPart from "./computer-part.js";

class Mouse extends ComputerPart {
  accept(computerPartVisitor) {
    computerPartVisitor.visit(this);
  }
}

export default Mouse;