
class FilterChain {
  constructor(target) {
    this.filters = [];
    this.target = undefined;
  }
  addFilter(filter) {
    this.filters.push(filter);
  }
  execute(request) {
    for (let filter of this.filters) {
      filter.execute(request);
    }
    this.target.execute(request);
  }
  setTarget(target) {
    this.target = target;
  }
}
export default FilterChain;