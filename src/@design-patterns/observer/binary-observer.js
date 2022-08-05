import Subject from "./subject.js";
import Observer from "./observer.js";

class BinaryObserver extends Observer {
  constructor(subject) {
    super();
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log("Binary String: " + this.subject.getState().toString(2));
  }
}

export default BinaryObserver;