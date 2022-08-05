
class Game {
  initialize() { 
  }
  startPlay() {
  }
  endPlay() {
  }

  //template method
  play(){
    //initialize the game
    this.initialize();

    //start game
    this.startPlay();

    //end game
    this.endPlay();
  }
}

export default Game;