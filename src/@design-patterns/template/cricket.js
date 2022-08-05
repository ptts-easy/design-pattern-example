import Game from "./game.js";

class Cricket extends Game {
  endPlay() {
    console.log("Cricket Game Finished!");
  }
  initialize() {
    console.log("Cricket Game Initialized! Start playing.");
  }
  startPlay() {
    console.log("Cricket Game Started. Enjoy the game!");
  }
}

export default Cricket;