
class Client {
  setFilterManager(filterManager) {
    this.filterManager = filterManager;
  }
  sendRequest(request) {
    this.filterManager.filterRequest(request);
  }
}
export default Client;