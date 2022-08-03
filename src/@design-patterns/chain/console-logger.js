console.log("running console-logger.js");

import AbstractLogger from "./abstract-logger.js";

class ConsoleLogger extends AbstractLogger {
  constructor(level) {
    super(level);
  }
  write(message) {
    console.log("Standard Console::Logger: " + message);
  }
}

export default ConsoleLogger;