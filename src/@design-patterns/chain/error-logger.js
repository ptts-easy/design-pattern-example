console.log("running error-logger.js");

import AbstractLogger from "./abstract-logger.js";

class ErrorLogger extends AbstractLogger {
  constructor(level) {
    super(level);
  }
  write(message) {
    console.log("Error Console::Logger: " + message);
  }
}

export default ErrorLogger;