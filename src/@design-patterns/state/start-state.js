import State from "./state.js";

class StartState extends State {
  doAction(context) {
    console.log("Player is in start state");
    context.setState(this);
  }
  toString() {
    return "Start State";
  }
}

export default StartState;