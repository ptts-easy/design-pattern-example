console.log("running abstract-logger.js");

import NodeInterface from "./node-interface.js";
import {CHAIN_NEXT, CHAIN_FAILED, CHAIN_COMPLATE} from "./node-interface.js";

export const LOG_INFO = 1;
export const LOG_DEBUG = 2;
export const LOG_ERROR = 3;

class AbstractLogger extends NodeInterface{
  constructor(level) {
    super();
    this.level = level;
    this.param = undefined;
  }
  run() {
    let {level, message} = this.param;
    if (this.level <= level) {
      this.write(message);
      return CHAIN_NEXT;
    }
    return CHAIN_NEXT;
  }
  write(message) {
    console.log("AbstractLogger::Logger: " + message);
  }
}

export default AbstractLogger;