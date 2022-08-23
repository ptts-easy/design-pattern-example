import Dispatcher from "./dispatcher.js";

class FrontController {
  constructor() {
   this.dispatcher = new Dispatcher();
  }
  isAuthenticUser() {
    console.log("User is authenticated successfully.");
    return true;
  }
  trackRequest(request) {
    console.log("Page requested: " + request);
  }
  dispatchRequest(request) {
    //log each request
    this.trackRequest(request);

    //authenticate the user
    if (this.isAuthenticUser()) {
      this.dispatcher.dispatch(request);
    } 
  }
}

export default FrontController;