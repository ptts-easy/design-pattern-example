import MediaPlayer from "./media-player.js";
import VlcPlayer from "./vlc-player.js";
import Mp4Player from "./mp4-player.js";

class MediaAdapter extends MediaPlayer {
  constructor(audioType) {
    super();
    if (audioType == "vlc") {
      this.advancedMusicPlayer = new VlcPlayer();     
    } else if (audioType == "mp4") {
      this.advancedMusicPlayer = new Mp4Player();
    } else {
      this.advancedMusicPlayer = undefined;
    }
  }
  play(audioType, fileName) {
    if (audioType == "vlc") {
      this.advancedMusicPlayer.playVlc(fileName);
    } else if (audioType == "mp4") {
      this.advancedMusicPlayer.playMp4(fileName);
    } else {
      console.log("audioType error.");
    }
  }
}

export default MediaAdapter;