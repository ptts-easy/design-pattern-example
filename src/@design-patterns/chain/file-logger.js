console.log("running file-logger.js");

import AbstractLogger from "./abstract-logger.js";

class FileLogger extends AbstractLogger {
  constructor(level) {
    super(level);
  }
  write(message) {
    console.log("File::Logger: " + message);
  }
}

export default FileLogger;