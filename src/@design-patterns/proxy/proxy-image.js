import Image from "./image.js";
import RealImage from "./real-image.js";

class ProxyImage extends Image {
  constructor(fileName) {
    super();
    this.fileName = fileName;
  }
  display() {
    if (this.realImage == undefined) {
      this.realImage = new RealImage(this.fileName);
    }

    this.realImage.display();
  }
}

export default ProxyImage;