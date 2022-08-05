import State from "./state.js";

class StopState extends State {
  doAction(context) {
    console.log("Player is in stop state");
    context.setState(this);
  }
  toString() {
    return "Stop State";
  }
}

export default StopState;