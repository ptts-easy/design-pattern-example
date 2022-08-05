import AdvancedMediaPlayer from "./advanced-media-player.js";

class VlcPlayer extends AdvancedMediaPlayer {
  playVlc(fileName) {
    console.log("Playing vlc file. Name: "+ fileName);
  }
  playMp4(fileName) {
  }
}

export default VlcPlayer;