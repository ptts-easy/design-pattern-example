console.log("running chain-loggers.js");

import ChainInterface from "./chain-interface.js";

class ChainLoggers extends ChainInterface{
  constructor() {
    super();
  }
  execute(level, message) {
    if(this.first == undefined) {
      return false;
    } else {
      this.first.setParam({level:level, message:message});
      return this.first.execute();
    }
  }  
}

export default ChainLoggers;