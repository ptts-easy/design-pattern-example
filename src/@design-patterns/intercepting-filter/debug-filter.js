import Filter from "./filter.js";

class DebugFilter extends Filter {
  execute(request) {
    console.log("request log: " + request);
  }
}

export default DebugFilter;