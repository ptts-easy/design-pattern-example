import AbstractLogger_1 from "./abstract-logger_1.js";

class ErrorLogger_1 extends AbstractLogger_1 {
  constructor(level) {
    super();
    this.level = level;
  }
  write(message) {
    console.log("Error Console::Logger: " + message);
  }
}

export default ErrorLogger_1;