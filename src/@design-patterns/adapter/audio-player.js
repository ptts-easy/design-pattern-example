import MediaPlayer from "./media-player.js";
import MediaAdapter from "./media-adapter.js";

class AudioPlayer extends MediaPlayer {
  constructor(audioType) {
    super();
    this.mediaAdapter = undefined;
  }
  play(audioType, fileName) {    
    if (audioType == "mp3") {
      //inbuilt support to play mp3 music files
      console.log("Playing mp3 file. Name: " + fileName);     
    } else if (audioType == "vlc" || audioType == "mp4") {
      //mediaAdapter is providing support to play other file formats
      this.mediaAdapter = new MediaAdapter(audioType);
      this.mediaAdapter.play(audioType, fileName);
    } else {
      console.log("Invalid media. " + audioType + " format not supported");
    }
  }  
}

export default AudioPlayer;