import FilterChain from "./filter-chain.js";

class FilterManager {
  constructor(target) {
    this.filterChain = new FilterChain();
    this.filterChain.setTarget(target);
  }
  setFilter(filter) {
    this.filterChain.addFilter(filter);
  }
  filterRequest(request) {
    this.filterChain.execute(request);
  }
}
export default FilterManager;