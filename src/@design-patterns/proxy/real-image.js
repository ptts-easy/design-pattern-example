import Image from "./image.js";

class RealImage extends Image {
  constructor(fileName) {
    super();
    this.fileName = fileName;
    this.loadFromDisk(fileName);
  }
  display() {
    console.log("Displaying " + this.fileName);
  }
  loadFromDisk(fileName) {
    console.log("Loading " + fileName);
  }
}

export default RealImage;