import AdvancedMediaPlayer from "./advanced-media-player.js";

class Mp4Player extends AdvancedMediaPlayer {
  playVlc(fileName) {
  }
  playMp4(fileName) {
    console.log("Playing mp4 file. Name: "+ fileName);
  }
}

export default Mp4Player;