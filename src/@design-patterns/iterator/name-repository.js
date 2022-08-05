import Iterator from "./iterator.js";
import Container_1 from "./container_1.js";

class NameIterator extends Iterator {
  constructor(parent) {
    super();
    this.index = 0;
    this.parent = parent;
  }  
  hasNext() {
     if (this.index < this.parent.names.length) {
        return true;
     }
     return false;
  }
  next() {
    if(this.hasNext()){
      return this.parent.names[this.index++];
    }
    return null;
  }
}

class NameRepository extends Container_1 {
  constructor() {
    super();
    this.names = ["Robert", "John", "Julie", "Lora"];
  }
  getIterator() {
    return new NameIterator(this);
  }
}

export default NameRepository;