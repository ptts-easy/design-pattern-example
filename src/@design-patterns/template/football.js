import Game from "./game.js";

class Fpptball extends Game {
  endPlay() {
    console.log("Fpptball Game Finished!");
  }
  initialize() {
    console.log("Fpptball Game Initialized! Start playing.");
  }
  startPlay() {
    console.log("Fpptball Game Started. Enjoy the game!");
  }
}

export default Fpptball;