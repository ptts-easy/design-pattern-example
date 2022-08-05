import AbstractLogger_1 from "./abstract-logger_1.js";

class FileLogger_1 extends AbstractLogger_1 {
  constructor(level) {
    super();
    this.level = level;
  }
  write(message) {
    console.log("File::Logger: " + message);
  }
}

export default FileLogger_1;