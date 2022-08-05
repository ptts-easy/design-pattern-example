import ComputerPart from "./computer-part.js";

class Keyboard extends ComputerPart {
  accept(computerPartVisitor) {
    computerPartVisitor.visit(this);
  }
}

export default Keyboard;