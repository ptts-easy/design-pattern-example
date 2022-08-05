import Subject from "./subject.js";
import Observer from "./observer.js";

class HexaObserver extends Observer {
  constructor(subject) {
    super();
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log("Hex String: " + this.subject.getState().toString(16)); 
  }
}

export default HexaObserver;