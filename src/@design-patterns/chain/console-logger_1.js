import AbstractLogger_1 from "./abstract-logger_1.js";

class ConsoleLogger_1 extends AbstractLogger_1 {
  constructor(level) {
    super();
    this.level = level;
  }
  write(message) {
    console.log("Standard Console::Logger: " + message);
  }
}

export default ConsoleLogger_1;