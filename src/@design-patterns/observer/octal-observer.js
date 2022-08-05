import Subject from "./subject.js";
import Observer from "./observer.js";

class OctalObserver extends Observer {
  constructor(subject) {
    super();
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log("Octal String: " + this.subject.getState().toString(8)); 
  }
}

export default OctalObserver;