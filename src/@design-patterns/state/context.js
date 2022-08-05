
class Context {
  constructor() {
    this.state = null;
  }
  setState(state) {
    this.state = state;
  }
  getState() {
    return this.state;
  }
}

export default Context;