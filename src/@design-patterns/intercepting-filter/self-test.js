console.log("***** running intercepting-filter self-test.js *****");

import Target from "./target.js";
import FilterManager from "./filter-manager.js";
import AuthenticationFilter from "./authentication-filter.js";
import DebugFilter from "./debug-filter.js";
import Client from "./client.js";

export default function self_test() {

  console.log("------- start intercepting-filter-test -------");
  
  let filterManager = new FilterManager(new Target());
  filterManager.setFilter(new AuthenticationFilter());
  filterManager.setFilter(new DebugFilter());

  let client = new Client();
  client.setFilterManager(filterManager);
  client.sendRequest("HOME");

  console.log("------- end intercepting-filter-test -------");
}