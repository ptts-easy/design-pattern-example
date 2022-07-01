console.log("running collection-interface.js");

import ElementInterface from "./element-interface.js";

class CollectionInterface {
  constructor() {
    this.elements = new Map();    
  }
  getAllElements() {
    return this.elements;
  }
  updateElement(element) {
    this.elements.set(element.getUid(), element);
  }
  hasElement(element) {
    return this.elements.has(element.getUid());
  }
  getElement(element) {
    return this.elements.get(element.getUid());
  }
  deleteElement(element) {
    this.elements.delete(element.getUid());
  }
  print_me() {
    console.log("Called " + this.elements + " : CollectionInterface");
  }
}

export default CollectionInterface;