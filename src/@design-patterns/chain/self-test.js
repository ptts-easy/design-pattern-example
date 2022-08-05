console.log("***** running chain self-test.js *****");

import ConsoleLogger from "./console-logger.js";
import ErrorLogger from "./error-logger.js";
import FileLogger from "./file-logger.js";
import ChainLoggers from "./chain-loggers.js";

import {LOG_INFO, LOG_DEBUG, LOG_ERROR} from "./abstract-logger.js";

import ConsoleLogger_1 from "./console-logger_1.js";
import ErrorLogger_1 from "./error-logger_1.js";
import FileLogger_1 from "./file-logger_1.js";
import AbstractLogger_1 from "./abstract-logger_1.js";

import Run from "./chain_1.js";

function getChainOfLoggers() {

  let errorLogger = new ErrorLogger_1(AbstractLogger_1.ERROR);
  let fileLogger = new FileLogger_1(AbstractLogger_1.DEBUG);
  let consoleLogger = new ConsoleLogger_1(AbstractLogger_1.INFO);

  errorLogger.setNextLogger(fileLogger);
  fileLogger.setNextLogger(consoleLogger);

  return errorLogger; 
}

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

  console.log("------- start chain-test -------");

  let loggerChain = getChainOfLoggers();

  loggerChain.logMessage(AbstractLogger_1.INFO, "This is an information.");

  loggerChain.logMessage(AbstractLogger_1.DEBUG, "This is an debug level information.");

  loggerChain.logMessage(AbstractLogger_1.ERROR, "This is an error information.");

  console.log("------- end chain-test -------");

  Run();
}
