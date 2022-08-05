
class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }
  attach(observer) {
    this.observers.push(observer);
  }
  notifyAllObservers() {
    for (let observer of this.observers) {
      observer.update();
    }
  }
}

export default Subject;