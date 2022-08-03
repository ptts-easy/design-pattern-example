console.log("***** running chain self-test.js *****");

import ConsoleLogger from "./console-logger.js";
import ErrorLogger from "./error-logger.js";
import FileLogger from "./file-logger.js";
import ChainLoggers from "./chain-loggers.js";

import {LOG_INFO, LOG_DEBUG, LOG_ERROR} from "./abstract-logger.js";

import Run from "./chain_1.js";

export default function self_test(){

  console.log("------- start chain-test -------");

  let chain = new ChainLoggers();

  let errorLogger = new ErrorLogger(LOG_ERROR);
  let fileLogger = new FileLogger(LOG_DEBUG);
  let consoleLogger = new ConsoleLogger(LOG_INFO);

  chain.push(errorLogger);

  errorLogger.setNext(fileLogger);
  fileLogger.setNext(consoleLogger);

//  chain.push(fileLogger);
//  chain.push(consoleLogger);

  chain.execute(LOG_INFO, "This is an information.");

  chain.execute(LOG_DEBUG, "This is an debug level information.");

  chain.execute(LOG_ERROR, "This is an error information.");

  console.log("------- end chain-test -------");

  Run();
}
