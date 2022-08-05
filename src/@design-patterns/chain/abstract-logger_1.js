
class AbstractLogger_1{
  static INFO = 1;
  static DEBUG = 2;
  static ERROR = 3;

  constructor() {
    this.level = 0;
    //next element in chain or responsibility
    this.nextLogger = undefined;
  }
  setNextLogger(nextLogger){
    this.nextLogger = nextLogger;
  }
  logMessage(level, message) {
    if (this.level <= level) {
      this.write(message);
    }
    if (this.nextLogger != undefined) {
      this.nextLogger.logMessage(level, message);
    }
  }
  write(message) {    
  }
}

export default AbstractLogger_1;