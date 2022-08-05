import ComputerPart from "./computer-part.js";
import Mouse from "./mouse.js";
import Keyboard from "./keyboard.js";
import Monitor from "./monitor.js";

class Computer extends ComputerPart {
  constructor() {
    super();
    this.parts = [new Mouse(), new Keyboard(), new Monitor()];
  }
  accept(computerPartVisitor) {
    for (let i = 0; i < this.parts.length; i++) {
      this.parts[i].accept(computerPartVisitor);
    }
    computerPartVisitor.visit(this);
  }
}

export default Computer;