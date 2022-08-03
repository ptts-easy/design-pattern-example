console.log("running container.js");

import IteratorInterface from "./iterator-interface.js";

class Container extends IteratorInterface {
  constructor() {
    super();
    this.names = ["Robert", "John", "Julie", "Lora"];
    this.index = 0;
  }
  first() {
    this.index = 0;
  }
  hasNext() {
    return this.index < this.names.length;
  }
  next() {
    this.index ++;
  }
  value() {
    if(this.index < 0 || this.index >= this.names.length)
      return "";
    return this.names[this.index];
  }
  getIterator() {
    return this;
  }
}

export default Container;