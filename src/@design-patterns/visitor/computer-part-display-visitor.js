import ComputerPartVisitor from "./computer-part-visitor.js";

import Computer from "./computer.js";
import Mouse from "./mouse.js";
import Keyboard from "./keyboard.js";
import Monitor from "./monitor.js";

class ComputerPartDisplayVisitor extends ComputerPartVisitor {
  visit(part) {
    if (part instanceof Computer) {
      console.log("Displaying Computer.");
    } else if (part instanceof Mouse) {
      console.log("Displaying Mouse.");
    } else if (part instanceof Keyboard) {
      console.log("Displaying Keyboard .");
    } else if (part instanceof Monitor) {
      console.log("Displaying Monitor.");
    } else {
      console.log("Displaying Unkown Part.");
    }
  }
}

export default ComputerPartDisplayVisitor;