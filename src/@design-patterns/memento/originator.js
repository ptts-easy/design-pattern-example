import Memento from "./memento.js";

class Originator {
  constructor(name) {
    this.state = "";
  }
  setState(state) {
    this.state = state;
  }
  getState() {
    return this.state;
  }  
  saveStateToMemento(message) {
    return new Memento(this.state);
  }
  getStateFromMemento(memento) {
    this.state = memento.getState();
  }
}

export default Originator;